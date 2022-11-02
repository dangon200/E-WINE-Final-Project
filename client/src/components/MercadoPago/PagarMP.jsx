import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import s from './pagarMP.module.css'
// import Button from 'react-bootstrap/esm/Button'
import { clearCarrito } from '../../store/actions/actions'
import { SocketContext } from '../../context/socket'
import { useContext } from 'react'

const urlApi = 'https://e-winespf.herokuapp.com'
// const urlApi = 'http://localhost:3001'

export default function PagarMP () {
  const carrito = useSelector(state => state.carrito)
  const publications = useSelector(state => state.publications)
  const cookie = new Cookies()
  const user = cookie.get('TOKEN')
  const socket = useContext(SocketContext)
  const dispatch = useDispatch()
  function crearCarr () {
    dispatch(clearCarrito())
    for (let x = 0; x < window.localStorage.length; x++) {
      const id = window.localStorage.key(x)
      window.localStorage.removeItem(id)
    }
  }
  const redirigirMP = () => {
    const buying = carrito.map(item => {
      return {
        title: item.title,
        description: item.description,
        unit_price: parseInt(item.price),
        quantity: parseInt(item.count),
        category_id: item.id,
        id: user.user.id
      }
    })
    fetch(`${urlApi}/checkout`, {
      method: 'POST',
      body: JSON.stringify(buying),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => {
        const publication = publications.find(p => carrito[0].id === p.id)
        socket.emit('sendBuy', {
          senderName: user.username,
          receiverId: publication.userId,
          publicationTitle: publication.title
        })
        crearCarr()
        document.location = data.data
      })
  }
  return (
    <div>
      <button className={s.button} onClick={redirigirMP}>
        Pagar con Mercado Pago
      </button>
    </div>
  )
}
