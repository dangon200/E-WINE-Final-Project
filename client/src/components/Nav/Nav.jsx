import style from './nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'
/* import logo from '../../utils/images/logodefinitivosinfondopng.png' */
import logo from '../../utils/images/logo-d-e-wine.png'

export default function Nav () {
  return (
    <div className={style.navContainer}>
      <nav className={style.nav}>
        <a className={style.logo} href='/home'>
          {/* <span className={style.span}>e-wine</span> */}
          <img className={style.imgLogo} src={logo} alt={logo} />
        </a>
        <div className={style.searchBar}>
          <SearchBar />
        </div>
        <div className={style.containerLink}>
          <NavLink className={style.inicio} to='/'>
            <span>Inicio</span>
          </NavLink>
          <NavLink className={style.about} to='/about'>
            <span>Nosotros</span>
          </NavLink>
          <NavLink className={style.tienda} to='/home'>
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
    </div>
  )
}
