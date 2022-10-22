import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavorites } from '../../store/actions/actions'
// import { useSelector } from 'react-redux'
// import Counter from '../Counter/Counter'

export default function Favorites (props) {
  const { id, title, price } = props
  const dispatch = useDispatch()
  // const countItemCarrito=useSelector

  const removeFromFavorites = (id) => {
    window.localStorage.removeItem(id)
    dispatch(removeFavorites(id))
  }
  return (
    <div>
      <button onClick={() => { removeFromFavorites(id) }}>
        X
      </button>
      <Link to={`/publication/${id}`}>
        Volver a la publicación
      </Link>
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {price}
        </p>
      </div>
    </div>
  )
}
