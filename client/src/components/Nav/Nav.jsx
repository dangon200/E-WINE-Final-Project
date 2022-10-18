import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'
// import logo from '../assets/imgs/e-wine-logo.png'
import logo from '../../utils/images/logodefinitivosinfondopng.png'
import { useSelector } from 'react-redux'
// import SearchBar from '../SearchBar/SearchBar'
// import { BsCart } from 'react-icons/bs'
import bolsita from '../assets/imgs/bolsita.png'

export default function Nav () {
  const carritoItems = useSelector(state => state.carrito)
  return (
    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
      <div className='container-fluid'>

        <Link to='/home' className={`me-auto ${style.span}`}>
          <img src={logo} alt='logo' className={`navbar-brand ${style.logo}`} />
          <span className={style.span}>E-WINE</span>
        </Link>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse  ${style.links}`} id='navbarNavAltMarkup'>

          <div className='navbar-nav ms-auto me-2 mb-2 mb-lg-0'>
            <Navegador link='/' span='Inicio' className='nav-link' />

            <Navegador link='/about' span='Sobre E-Wine' className='nav-link' />

            <Navegador link='/home' span='Tienda' className='nav-link' />

            <Navegador link='/createAccount' span='Crear Cuenta' className='nav-link' />

            <Navegador link='/createPublication' span='Crear Publicación' className='nav-link' />
            <div className={`nav-link ${style.carritoContainer}`}>
              <Link to='/carrito'>
                <div className={style.numberCarrito}>{carritoItems.length}</div>
                <img src={bolsita} alt='bolsita' />
              </Link>
            </div>
          </div>

        </div>
      </div>

    </nav>
  )
}
