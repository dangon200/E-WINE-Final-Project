import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './Navegador.module.css'
import Cookies from 'universal-cookie'

function Navegador (props) {
  const cookies = new Cookies()
  console.log(cookies)
  const { link, span } = props
  const location = useLocation()
  return (
    <>
      <NavLink
        onClick={() => {
          if (span === 'Cerrar') {
            cookies.remove('TOKEN', { path: '/' })
          }
        }}
        to={link}
        className={location.pathname === link ? style.navlinkActive : style.navlink}
      >
        <span>{span}</span>
      </NavLink>
    </>
  )
}

export default Navegador
