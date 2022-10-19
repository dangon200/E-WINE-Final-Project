import React from 'react'
import { useSelector } from 'react-redux'
import ItemCarrito from '../ItemCarrito/ItemCarrito'
import style from './carrito.module.css'
// import { removeCarrito } from '../../store/actions/actions'

const getCarritoPublications = (carrito, publications) => {
  const pubInCarrito = []
  carrito.forEach(c => {
    pubInCarrito.push([publications.find(p => p.id === c.id), c.count])
  })
  return pubInCarrito
}

export default function Carrito () {
  // const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)
  const publications = useSelector(state => state.allPublications)
  const publicationsCarrito = getCarritoPublications(carrito, publications)
  console.log('carrito', carrito, 'publications', publications, 'publicationsCarrito', publicationsCarrito)

  /* const removeFromCarrito = (id) => {
    dispatch(removeCarrito(id))
  } */

  return (
    <div className={style.container}>
      {publicationsCarrito.length > 0
        ? publicationsCarrito.map(p => {
          return (
            <ItemCarrito key={p[0].id} title={p[0].title} price={p[0].price} count={p[1]} image={p[0].image} />
          )
        })
        : <h3>No has agregado nada al carrito aún!</h3>}
      {/* <ItemCarrito /> */}
    </div>
  )
}
