import style from './nav.module.css'
// import SearchBar from '../SearchBar/SearchBar.jsx'

import { Link } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'
import logo from '../assets/imgs/e-wine-logo.png'
import bolsita from '../assets/imgs/bolsita.png'

export default function Nav () {
  return (
    <nav className={style.navbar}>
      <div>
        <Link to='/home' className={style.span}>
          <img src={logo} alt='logo' />
          <span className={style.span}>E-WINE</span>

        </Link>
      </div>
      <div className={style.links}>

        {/* <SearchBar /> */}

        <Navegador link='/' span='Inicio' />

        <Navegador link='/about' span='Sobre E-Wine' />

        <Navegador link='/home' span='Tienda' />

        <Navegador link='/home' span='Crear Cuenta' />

        <Navegador link='/createpubli' span='Crear Publicación' />
        <img src={bolsita} alt='bolsita' />
      </div>

    </nav>
  )
}
