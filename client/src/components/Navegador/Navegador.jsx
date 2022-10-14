import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navegador.module.css'

function Navegador (props) {
  const { link, span } = props
  return (
    <>
      <NavLink to={link} className={style.navlink}>
        <span className={style.spanActive}>{span}</span>
      </NavLink>
    </>
  )
}

export default Navegador
