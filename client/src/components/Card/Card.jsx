import style from './card.module.css'
/* import { MdFavoriteBorder } from 'react-icons/md' */
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCarrito, addFavorites, getByPublication, removeCarrito, removeFavorites } from '../../store/actions/actions'

export default function Card ({ id, title, name, image, price }) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const carrito = useSelector(state => state.carrito)

  const isInFavorites = (id) => {
    for (let x = 0; x < favorites.length; x++) {
      if (favorites[x] === id) return true
    }
    return false
  }

  const isInCarrito = (id) => {
    return carrito.some(p => p.id === id)
  }

  const addToCarrito = (id, price, title, image, name) => {
    window.localStorage.setItem(id, JSON.stringify({ price, title, image, name, count: 1 }))
    dispatch(addCarrito({ id, price, title, image, name, count: 1 }))
  }

  const removeFromCarrito = (id) => {
    window.localStorage.removeItem(id)
    dispatch(removeCarrito(id))
  }

  return (

    <div className={style.card}>
      <div className={style.iconContainer}>

        <FaHeart
          className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
            isInFavorites(id) ? dispatch(removeFavorites(id)) : dispatch(addFavorites(id))
          }}
        />

      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt='Wine-Img' />
      </div>
      <div className={style.dataContainer}>
        <h3>{title}</h3>
        <div className={style.infoContainer}>
          <h4 className={style.name}>{name}</h4>
          <h4 className={style.price}>${price}</h4>
        </div>
        <div className={style.btnContainer}>
          <Link
            to={`/publication/${id}`} className={style.moreBtn} onClick={() => {
              dispatch(getByPublication(id))
            }}
          >Más Info
          </Link>
          <button
            className={style.addBtn} onClick={() => {
              window.localStorage.getItem(id) ? removeFromCarrito(id) : addToCarrito(id, price, title, image, name)
            }}
          >{isInCarrito(id) ? 'Remover' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  )
}
