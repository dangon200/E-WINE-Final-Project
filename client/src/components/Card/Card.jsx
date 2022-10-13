import style from './card.module.css'
import { AiFillStar } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Card ({ id, name, image, score }) {
  return (
    <div className={style.card} key={id}>
      <div className={style.divImage}>
        <img className={style.image} src={image} alt={image} />
      </div>
      <div className={style.dataCard}>
        <h2 className={style.cardTitle}>{name}</h2>
        <h4><span><AiFillStar /></span>{score}</h4>
      </div>
      <div className={style.buttonCard}>
        <button className={style.cartButton}><span><MdAddShoppingCart /></span> Agregar</button>
        <Link to='/detail'>
          <button className={style.detailButton}>Detalle</button>
        </Link>
      </div>
    </div>
  )
}
