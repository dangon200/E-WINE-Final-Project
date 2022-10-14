import React from 'react'
import { NavLink } from 'react-router-dom'

function Navegador (props) {
  const { link, span } = props
  return (
    <div>
      <NavLink to={link}>
        <span>{span}</span>
      </NavLink>
    </div>
  )
}

export default Navegador
