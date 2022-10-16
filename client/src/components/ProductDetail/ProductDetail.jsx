import React from 'react'
import style from './productDetail.module.css'

export default function ProductDetail (props) {
  const { publication } = props
  return (
    <div className={style.container}>
      <div>
        <h1>PRODUCT DETAIL</h1>
        <span>{publication.type}</span>
        <span>{publication.varietal}</span>
        <span>{publication.origin}</span>
        <span>{publication.cellar}</span>
      </div>
      <div className={style.description}>
        {/* <span>{publication.description}</span> */}
      </div>
    </div>
  )
}
