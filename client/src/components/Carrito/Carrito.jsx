import React from 'react'
import { useSelector } from 'react-redux'
import ItemCarrito from '../ItemCarrito/ItemCarrito'
import style from './carrito.module.css'
import { Link, useHistory } from 'react-router-dom'
import PagarMP from '../MercadoPago/PagarMP'

import Cookies from 'universal-cookie'

import Button from 'react-bootstrap/esm/Button'
// import Col from 'react-bootstrap/esm/Col'
// import Row from 'react-bootstrap/esm/Row'

export default function Carrito () {
  // const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)
  /* const user = useSelector(state => state.user) */
  const history = useHistory()
  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const user = useSelector(state => state.user)

  const totalAmount = carrito.reduce((acumulador, pactual) => {
    const total = (parseInt(pactual.price) * parseInt(pactual.count))
    return acumulador + total
  }, 0)

  return (
    <div className={style.container}>
      {carrito.length > 0
        ? carrito.map(p => {
          return (
            <ItemCarrito key={p.id} id={p.id} title={p.title} price={p.price} count={p.count} image={p.image} name={p.name} />
          )
        })
        : <h3 className='fs-4'>No has agregado nada al carrito aún!</h3>}
      <div className={style.total}>
        <div className='fs-4'>
          Costo de envio a {user.region ? user.region : 'su domicilio'}: $350
        </div>
        <div className='fs-4'>
          Total con envio: {carrito.length > 0
          ? totalAmount
          : 'No hay productos en el carrito'}
        </div>
      </div>
      {token ? <PagarMP /> : history.push('/register')}
      <Button className={style.button}>
        <Link className='text-decoration-none text-light' to={`/payment/${totalAmount}`}>
          Pagar con Tarjeta
        </Link>
      </Button>

    </div>
  )
}

// const getCarritoPublications = (carrito, publications) => {
//   const pubInCarrito = []
//   carrito.forEach(c => {
//     pubInCarrito.push([publications.find(p => p.id === c.id), c.count])
//   })
//   return pubInCarrito
// }

// const publications = useSelector(state => state.allPublications)
// const [publicationsCarrito, setPublicationsCarrito] = useState()
// useEffect(() => {
//   setPublicationsCarrito(getCarritoPublications(carrito, publications))
// }, [publications, carrito])
// console.log('carrito', carrito, 'publications', publications, 'publicationsCarrito', publicationsCarrito)
