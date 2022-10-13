import style from './card.module.css'
import image from '../../utils/images/Bodegas-Akutain-Rioja-Gran-Reserva-2004.png'
import { AiFillStar } from 'react-icons/ai'
import { MdAddShoppingCart } from 'react-icons/md'

export default function Card () {
  return (
    <div className={style.card}>
      <div className={style.divImage}>
        <img className={style.image} src={image} alt={image} />
      </div>
      <div className={style.dataCard}>
        <h2 className={style.cardTitle}>Rioja Gran Reserva-2004</h2>
        <h4><span><AiFillStar /></span> 4.7</h4>
      </div>
      <div className={style.buttonCard}>
        <button className={style.cartButton}><span><MdAddShoppingCart /></span> Agregar</button>
        <button className={style.detailButton}>Detalle</button>
      </div>
    </div>
  )
}
