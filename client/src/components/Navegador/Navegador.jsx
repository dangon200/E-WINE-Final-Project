import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './Navegador.module.css'
import Cookies from 'universal-cookie'
import FormLogin from '../FormLogin/FormLogin'

function Navegador (props) {
  const cookies = new Cookies()

  const { link, span, modal } = props
  const location = useLocation()
  if (modal) {
    return (
      <>
        <button
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
          className={style.navlink}
        />
        <FormLogin />
      </>
    )
  }

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
