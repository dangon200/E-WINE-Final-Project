import style from './footer.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  GrInstagram,
  GrTwitter,
  GrYoutube,
  GrFacebookOption
} from 'react-icons/gr'
import { IconContext } from 'react-icons'

export default function Footer () {
  return (
    <div className={style.container}>
      <div className={style.sep}>
        <div className={style.titleBox}>
          <h1>E-Wine</h1>
          <span>Una forma diferente de comprar vino</span>
        </div>
        <div className={style.comprasBox}>
          <ul>
            <li className={style.t}>COMPRAS</li>
            <br />
            <li className={style.l}>Carrito</li>
            <li className={style.l}>Tus compras</li>
            <li className={style.l}>Vinos guardados</li>
          </ul>
        </div>
        <div className={style.acercaBox}>
          <ul>
            <li className={style.t}>
              ACERCA DE
            </li>
            <br />
            <li className={style.l}>
              <Link to='/'>
                E-Wine
              </Link>
            </li>
            <li className={style.l}>
              <Link to='/'>
                Developers
              </Link>
            </li>
            <li className={style.l}>
              <Link to='/'>
                Proyecto
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.ayudaBox}>
          <ul>
            <li className={style.t}>AYUDA</li>
            <br />
            <li className={style.l}>Preguntas Frecuentes</li>
            <li className={style.l}>Términos y condiciones</li>
            <li className={style.l}>Contacto</li>
          </ul>

        </div>
      </div>
      <div className={style.iconos}>
        <div className={style.btn}>
          <a href='pal instagram'>
            <IconContext.Provider value={{ size: '3em', className: 'instagram' }}>
              <GrInstagram />
            </IconContext.Provider>
          </a>
        </div>
        <div className={style.btn}>
          <a href='pal feis'>
            <IconContext.Provider value={{ size: '3em', className: 'facebook' }}>
              <GrFacebookOption />
            </IconContext.Provider>
          </a>
        </div>
        <div className={style.btn}>
          <a href='pal twita'>
            <IconContext.Provider value={{ size: '3em', className: 'twitter' }}>
              <GrTwitter />
            </IconContext.Provider>
          </a>
        </div>
        <div className={style.btn}>
          <a href='Youtube'>
            <IconContext.Provider value={{ size: '3em', className: 'youtube' }}>
              <GrYoutube />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  )
}
