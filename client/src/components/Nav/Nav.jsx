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
    <nav className={style.navbar}>
      <div>
        <Link to='/home' className={style.span}>
          <img src={logo} alt='logo' className={style.logo} />
          <span className={style.span}>E-WINE</span>
        </Link>
      </div>
      <div className={style.links}>

        {/* <SearchBar /> */}

        <Navegador link='/' span='Inicio' />

        <Navegador link='/about' span='Sobre E-Wine' />

        <Navegador link='/home' span='Tienda' />

        <Navegador link='/crearCuenta' span='Crear Cuenta' />

        <Navegador link='/createpubli' span='Crear Publicación' />

        <div className={style.carritoContainer}>
          <Link to='/carritoCompras'>
            <div className={style.numberCarrito}>{carritoItems.length}</div>
            <img src={bolsita} alt='bolsita' />
          </Link>
        </div>
      </div>

    </nav>
  )
}
