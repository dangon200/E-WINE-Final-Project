import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemCarrito from '../ItemCarrito/ItemCarrito'
import style from './carrito.module.css'

export default function Carrito () {
  const carrito = useSelector(state => state.carrito)
  return (

    <div className={style.container}>
      {carrito.length > 0
        ? carrito.map(p => {
          return (
            <ItemCarrito key={p.id} id={p.id} title={p.title} price={p.price} count={p.count} image={p.image} name={p.name} />
          )
        })
        : <h3>No has agregado nada al carrito aún!</h3>}
      <div className={style.total}>
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
      </Link>
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
