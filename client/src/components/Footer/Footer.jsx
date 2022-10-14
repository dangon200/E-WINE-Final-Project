import style from './footer.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className={style.section}>
      <div>
        <h1>E-Wine</h1>
      </div>
      <div className={style.box}>
        <div>
          {/* <img src='facebook' alt='facebook' /> */}
          <a href='pal face'>Facebook</a>
        </div>
        <div>
          {/* <img src='Henry' alt='Henry' /> */}
          <a href='Henry'> Henry</a>
        </div>
        <div>
          {/* <img src='instagram' alt='instagram' /> */}
          <a href='instagram'>Instagram</a>
        </div>
        <div>
          {/* <img src='Youtube' alt='Youtube' /> */}
          <a href='Youtube'>Youtube</a>
        </div>
      </div>
      <div className={style.comprasBox}>
        <span>COMPRAS</span>
        <ul>
          <li>Carrito</li>
          <li>Tus Compras</li>
          <li>Vinos guardados</li>
        </ul>
      </div>
      <div className={style.acercaDeBox}>
        <span>ACERCA DE</span>
        <ul>
          <li>
            <Link to='/'>
              E-Wine
            </Link>
          </li>
          <li>
            <Link to='/'>
              Developers
            </Link>
          </li>
          <li>
            <Link to='/'>
              Proyecto
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.ayudaBox}>
        {/* Esto no sé si ponerlo... lo agregué por una cuestión de rellenar */}
        <span>AYUDA</span>
        <ul>
          <li>Preguntas Frecuentes</li>
          <li>Términos y condiciones</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  )
}
