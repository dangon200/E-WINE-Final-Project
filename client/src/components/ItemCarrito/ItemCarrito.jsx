import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCarrito } from '../../store/actions/actions'
// import { useSelector } from 'react-redux'
import Counter from '../Counter/Counter'
import style from './itemCarrito.module.css'

export default function ItemCarrito (props) {
  const { id, title, price, count, image, name } = props
  const dispatch = useDispatch()
  // const countItemCarrito=useSelector

  const removeFromCarrito = (id) => {
    window.localStorage.removeItem(id)
    dispatch(removeCarrito(id))
  }
  return (
    <div className={style.container}>

      <button className={style.close} onClick={() => { removeFromCarrito(id) }}>
        X
      </button>
      <Link>
        Volver a la publicación
      </Link>
      <div className={style.ItemCarrito}>
        <div className={style.image}>
          <img className={style.imagePublication} src={image} alt='publication' />
        </div>

        <div className={style.containerCounter}>

          <div className={style.publication}>
            {title}
          </div>
          <div className={style.count}>
            <Counter id={id} title={title} price={price} image={image} name={name} countFromPub={count} />
          </div>
          <div className={style.price}>
            $ {parseInt(price) * count}
          </div>
        </div>
      </div>
    </div>
  )
}
