import React from 'react'
import Counter from '../Counter/Counter'
import style from './itemCarrito.module.css'

export default function ItemCarrito (props) {
  const { title, price, count, image } = props
  return (
    <div className={style.container}>
      <div className={style.ItemCarrito}>
        <div className={style.image}>
          <img className={style.imagePublication} src={image} alt='publication' />
        </div>
        <div className={style.containerCounter}>
          <div className={style.publication}>
            {title}
          </div>
          <div className={style.count}>
            <Counter countFromPub={count} />
          </div>
          <div className={style.price}>
            $ {price * count}
          </div>
        </div>
      </div>
    </div>
  )
}
