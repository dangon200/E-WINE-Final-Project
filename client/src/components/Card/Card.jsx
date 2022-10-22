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
      console.log(favorites[x])
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

    <div className={`card ${style.card}`}>
      <div className={style.iconContainer}>

        <FaHeart
          className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
            isInFavorites(id) ? dispatch(removeFavorites(id)) : dispatch(addFavorites(id))
          }}
        />

      </div>
      <div className={`card-img-top ${style.imgContainer}`}>
        <img className={style.img} src={image} alt='Wine-Img' />
      </div>
      <div className={`card-body ${style.dataContainer}`}>
        <h3 className={`card-title ${style.title}`}>{title}</h3>
        <div className={`card-text ${style.infoContainer}`}>
          <h4 className={style.name}>{name}</h4>
          <h4 className={style.price}>${price}</h4>
        </div>
        <div className={`d-inline ${style.btnContainer}`}>
          <Link
            to={`/publication/${id}`} className={`btn btn-primary ${style.moreBtn}`} onClick={() => {
              dispatch(getByPublication(id))
            }}
          >Más Info
          </Link>
          <button
            className={`d-inline btn btn-primary me-5 ms-0 ${style.addBtn}`} onClick={() => {
              window.localStorage.getItem(id) ? removeFromCarrito(id) : addToCarrito(id, price, title, image, name)
            }}
          >
            {isInCarrito(id) ? 'Remover' : 'Añadir'}
          </button>
          <svg className={style.carritito} xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
          </svg>
        </div>
      </div>
    </div>
  )
}
