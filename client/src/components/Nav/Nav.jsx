import style from './nav.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'
// import { NavLink } from 'react-router-dom'
import Navegador from '../Navegador/Navegador.jsx'

export default function Nav () {
  return (
    <nav className={style.navbar}>
      <div>
        <SearchBar />
      </div>
      <div>

        <div>
          <Navegador link='/' span='Inicio' />
        </div>
        <div>
          <Navegador link='/about' span='Sobre E-Wine' />
        </div>
        <div>
          <Navegador link='/home' span='Tienda' />
        </div>
        <div>
          <Navegador link='/createPubli' span='Crear Publicación' />
        </div>

      </div>
    </nav>
  )
}
