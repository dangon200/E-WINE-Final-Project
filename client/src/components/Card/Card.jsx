import style from './card.module.css'
/* import { MdFavoriteBorder } from 'react-icons/md' */
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCarrito, addFavorites, getByPublication, getQuestions, removeCarrito, removeFavorites } from '../../store/actions/actions'

export default function Card ({ id, title, name, image, price }) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const carrito = useSelector(state => state.carrito)
  const user = useSelector(state => state.user)

  const isInFavorites = (id) => {
    for (let x = 0; x < favorites.length; x++) {
      if (favorites[x].publicationId === id) return true
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
        {user &&
          <FaHeart
            className={isInFavorites(id) ? style.iconActive : style.icon} onClick={() => {
              isInFavorites(id)
                ? dispatch(removeFavorites(
                  user.id,
                  id
                ))
                : dispatch(addFavorites({
                  userId: user.id,
                  publicationId: id
                }))
            }}
          />}
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
              dispatch(getQuestions(id))
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
        </div>
      </div>
    </div>
  )
}
