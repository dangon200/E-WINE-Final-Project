import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'
import logo from '../../utils/images/logodefinitivosinfondopng.png'
import { useSelector } from 'react-redux'
import bolsita from '../assets/imgs/bolsita.png'
import FormLogin from '../FormLogin/FormLogin'
import Modale from '../Modale/Modale'
// import { useEffect } from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default function Nav () {
  const user = useSelector(state => state.user)
  const carritoItems = useSelector(state => state.carrito)

  // useEffect(() => { console.log(login) }, [login])
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

            {/* <FormLogin /> */}
            {user &&
              <Navegador link='/createPublication' span='Crear Publicación' className='nav-link' />}
            <Modale
              buttonText={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              title={!user ? 'Iniciar sesión' : 'Cerrar sesión'}
              render={FormLogin}
              link='/register'
              createAcc
            />
          </div>
          <div className={style.userLogo}>
            {user ? <Link to='/userProfile'><FaUserAlt color='black' size={20} /> </Link> : null}
          </div>
          <Link to='/carrito' className={`${style.carritoContainer}`}>
            <div className={style.numberCarrito}>{carritoItems.length}</div>
            <img src={bolsita} alt='bolsita' />
          </Link>
        </div>
      </div>

    </nav>
  )
}
