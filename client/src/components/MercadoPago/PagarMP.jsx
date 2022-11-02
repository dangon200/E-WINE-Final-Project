import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import s from './pagarMP.module.css'
import Button from 'react-bootstrap/esm/Button'
const urlApi = 'https://e-winespf.herokuapp.com'

export default function PagarMP () {
  const carrito = useSelector(state => state.carrito)
  const cookie = new Cookies()
  const user = cookie.get('TOKEN')
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
        document.location = data.data
      })
  }
  return (
    <div>
      <Button className={s.button} onClick={redirigirMP}>
        Pagar con Mercado Pago
      </Button>
    </div>
  )
}
