import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './Navegador.module.css'

function Navegador (props) {
  const { link, span } = props
  const location = useLocation()
  return (
    <>
      <NavLink to={link} className={location.pathname === link ? style.navlinkActive : style.navlink}>
        <span>{span}</span>
      </NavLink>
    </>
  )
}

export default Navegador
