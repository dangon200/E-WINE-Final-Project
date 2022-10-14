import style from './nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className={style.nav}>
      <div>
        <SearchBar />
      </div>
      <div className={style.links}>
        <NavLink className={style.links} to='/'>
          <span>Inicio</span>
        </NavLink>
        <NavLink className={style.links} to='/about'>
          <span>Sobre E-Wine</span>
        </NavLink>
        <NavLink className={style.links} to='/home'>
          <span>Tienda</span>
        </NavLink>
        <NavLink className={style.links} to='/createpubli'>
          <span>Crear Publi</span>
        </NavLink>
        {/* <NavLink >
          <span>Iniciar Sesión</span>
        </NavLink> */}
      </div>
    </nav>
  )
}
