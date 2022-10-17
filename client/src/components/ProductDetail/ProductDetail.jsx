import React from 'react'
import style from './productDetail.module.css'

export default function ProductDetail (props) {
  const { publication } = props
  return (
    <div className={style.container}>

      <div className={style.title}><h1>FICHA TÉCNICA</h1></div>
      <div className={style.columna1}>
        <span className={style.sp}><span className={style.st}>TIPO: </span>{publication.type}</span>
        <br />
        <span className={style.sp}><span className={style.st}>VARIETAL: </span>{publication.varietal}</span>
      </div>
      <div className={style.columna2}>
        <span className={style.sp}><span className={style.st}>ORIGEN: </span>{publication.origin}</span>
        <br />
        <span className={style.sp}><span className={style.st}>CELLAR: </span>{publication.cellar}</span>
      </div>

      <div className={style.description}>
        {/* <span>{publication.description}</span> */}
      </div>
    </div>
  )
}
