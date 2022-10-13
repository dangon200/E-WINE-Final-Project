// import style from './nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
      <div>
        <SearchBar />
      </div>
      <div>
        <NavLink to='/'>
          <span>Inicio</span>
        </NavLink>
        <NavLink to='/about'>
          <span>Sobre E-Wine</span>
        </NavLink>
        <NavLink to='/home'>
          <span>Tienda</span>
        </NavLink>
        {/* <NavLink to='/Create'>
          <span>Crear Cuenta</span>
        </NavLink>
        <NavLink>
          <span>Iniciar Sesión</span>
        </NavLink> */}
      </div>
    </nav>
  )
}
