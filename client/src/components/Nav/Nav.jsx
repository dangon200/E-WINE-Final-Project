import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'
import logo from '../../utils/images/logodefinitivosinfondopng.png'
import carrito from '../../utils/images/cart-design.png'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
// import bolsita from '../assets/imgs/bolsita.png'

export default function Nav () {
  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  console.log(token)

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

            <Navegador
              link={token ? '/profile' : '/login'}
              span={token ? 'Mi Cuenta' : 'Iniciar Sesión'}
              className='nav-link'
            />

            <Navegador link='/createPublication' span='Crear Publicación' className='nav-link' />
            {
              token && <Navegador link='/home' span='Cerrar' className='nav-link' />
            }

          </div>
          <Link to='/carrito' className={`${style.carritoContainer}`}>
            <div className={style.numberCarrito}>{carritoItems.length}</div>
            <img src={carrito} alt='bolsita' />
          </Link>
        </div>
      </div>

    </nav>
  )
}
