import React, { useState, useEffect } from 'react' // eslint-disable-line
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { postStripe } from '../../store/actions/actions'

export default function CheckoutForm (props) {
  const history = useHistory()
  const stripe = useStripe()
  const elemets = useElements()
  const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)
  const cookies = new Cookies()
  const user = cookies.get('TOKEN')
  console.log(user)
  console.log(user.user.id)

  const { totalAmount } = props

  /*   function clearCarrito () {
    dispatch(clearCarrito())
    for (let x = 0; x < window.localStorage.length; x++) {
      const id = window.localStorage.key(x)
      window.localStorage.removeItem(id)
    }
  } */

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
        .then(res => {
          console.log(res)
          setSuccess(true)
          setMessage('Pago confirmado!! gracias! Vuelva Pronto 😁')
          setTimeout(() => {
            history.push('/home')
          }, 3000)
        })
        .catch(err => {
          setErr(true)
          setMessage(err)
        })
    } else {
      console.log(error)
      setErr(true)
      setMessage('Algo salio mal!!')
      setTimeout(() => { setErr(false) }, 4000)
    }
  }
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [err, setErr] = useState(false)
  const [send, setSend] = useState(false)
  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <img src='https://imgs.search.brave.com/Y5KS64aNvBNg8mwK5G1ks_1XK8_Fnorl1iMGPkBmSu4/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MTlpVHR6Qzk0ZHBM/elZZdXFqMzZnSGFF/NyZwaWQ9QXBp' alt='vino' className='img-fluid' />
      <h4 className='text-center my-2'>$ {totalAmount}</h4>
      <div className='form-group'>
        <CardElement className='form-control' />
      </div>
      <button
        className='btn btn-success'
        disabled={send && true}
      >
        Comprar
      </button>
      {err && <div class='alert alert-danger' role='alert'>{message}</div>}
      {success && <div class='alert alert-success' role='alert'>{message}</div>}
    </form>
  )
}
