import React from 'react'
import { Link } from 'react-router-dom'
import style from './Error404.module.css'

function Error404 () {
  return (
    <div className={style.containerError}>
      <div className={style.containerTitle}>
        <h1 className={style.titleError}>Pagina no encontrada</h1>
        <Link to='/home' className={style.link}>
          <button className={style.buttonBack}>Volver a la Tienda</button>
        </Link>
      </div>
    </div>
  )
}

export default Error404
