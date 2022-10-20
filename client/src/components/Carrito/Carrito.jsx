import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemCarrito from '../ItemCarrito/ItemCarrito'
import style from './carrito.module.css'
import Table from 'react-bootstrap/Table'
// import Container from 'react-bootstrap/Container'

export default function Carrito () {
  // const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)
  return (
    <Container fluid>
      <div className={style.container}>
        <h1>Mi carrito</h1>
        <div>
          {carrito.length > 0
            ? carrito.map(p => {
              return (
                <ItemCarrito key={p.id} id={p.id} title={p.title} price={p.price} count={p.count} image={p.image} name={p.name} />
              )
            })
            : <h3>No has agregado nada al carrito aún!</h3>}
        </div>
        {/* <div className={style.total}>
          <div className={style.envio}>
            Aca va la direccion de envio del usuario: y aca el costo
          </div>
          <div className={style.sumaTotal}>
            Total con envio:{carrito.length > 0
            ? carrito.reduce((acumulador, pactual) => {
              const total = (parseInt(pactual.price) * parseInt(pactual.count))
              return acumulador + total
            }, 0)
            : 'No hay productos en el carrito'}
          </div>
        </div>
        <Link to='/Buy'>
          <button>Continuar compra</button>
        </Link> */}

        <Table responsive>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Envio</td>
              <td>En el suguiente paso</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$600</td>
            </tr>
          </tbody>
        </Table>
        <Link to='/Buy'>
          <button>Continuar compra</button>
        </Link>
      </div>
    </Container>
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
