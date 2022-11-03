import React, { useState, useEffect, useContext } from 'react'//eslint-disable-line
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Cookies from 'universal-cookie'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postStripe, clearCarrito } from '../../store/actions/actions'
// import { SocketContext } from '../../context/socket'
import { IoCaretBack } from 'react-icons/io5'
import s from './checkoutForm.module.css'
export default function CheckoutForm (props) {
  const history = useHistory()
  const stripe = useStripe()
  const elemets = useElements()
  const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)
  const buy = useSelector(state => state.buy)
  const cookies = new Cookies()
  const user = cookies.get('TOKEN')
  // const socket = useContext(SocketContext)
  // const publications = useSelector(state => state.publications)

  const { totalAmount } = props

  function crearCarr () {
    dispatch(clearCarrito())
    for (let x = 0; x < window.localStorage.length; x++) {
      const id = window.localStorage.key(x)
      window.localStorage.removeItem(id)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSend(true)
      const { error, paymentMethod } = await stripe.createPaymentMethod({ // eslint-disable-line
      type: 'card',
      card: elemets.getElement(CardElement)
    })
    console.log(paymentMethod)
    if (!error) {
      const { id } = paymentMethod
      dispatch(postStripe(id, totalAmount * 100, carrito, user.user.id))
    }
  }

  useEffect(() => {
    if (typeof buy === 'string') {
      setErr(true)
      setMessage('Algo salio mal!!')
      setTimeout(() => {
        setErr(false)
        setSend(false)
      }, 4000)
    } else if (Object.keys(buy).length) {
      // const publication = publications.find(p => carrito[0].id === p.id)
      // console.log(publication)
      // socket.emit('sendBuy', {
      //   senderName: user.username,
      //   receiverId: publication.userId,
      //   publicationTitle: publication.title
      // })
      crearCarr()
      setSuccess(true)
      setMessage('Pago confirmado!! gracias! Vuelva Pronto 😁')
      setTimeout(() => {
        history.push('/userPurchased')
      }, 3000)
    }
  }, [buy]) // eslint-disable-line

  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)
  const [send, setSend] = useState(false)
  return (
    <form onSubmit={handleSubmit} className={s.card}>
      <div className='row'>
        <Link className='d-flex justify-content-center align-items-center text-decoration-none text-dark fs-2 fw-3 mb-4' to='/carrito'>
          <IoCaretBack /> Volver al carrito
        </Link>
      </div>
      <img src='https://imgs.search.brave.com/Y5KS64aNvBNg8mwK5G1ks_1XK8_Fnorl1iMGPkBmSu4/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MTlpVHR6Qzk0ZHBM/elZZdXFqMzZnSGFF/NyZwaWQ9QXBp' alt='vino' className='img-fluid' />
      <h4 className='text-center mt-3 fs-2'>$ {totalAmount}</h4>
      <div className='form-group my-3'>
        <CardElement className='form-control p-4' />
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <button
          className='btn btn-success fs-4 p-2 my-3 w-50'
          disabled={send && true}
        >
          Comprar
        </button>
      </div>
      {err && <div class='alert alert-danger' role='alert'>{message}</div>}
      {success && <div class='alert alert-success' role='alert'>{message}</div>}
    </form>
  )
}
