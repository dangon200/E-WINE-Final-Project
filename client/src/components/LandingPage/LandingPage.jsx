// import style from './LandingPage.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ConoceEWine from './ConoceEWine'
import AboutDevs from './AboutDevs'
import Footer from '../Footer/Footer.jsx'
// import NavBar from '../Nav/Nav.jsx'

export default function LandingPage () {
  return (
    <div>
      {/* <div>
        <NavBar />
      </div> */}
      <div>
        <h1>Descrubrí E-wine</h1>
      </div>
      <div>
        <Link to='/about'>
          <button>
            CONOCÉ SOBRE E-WINE
          </button>
        </Link>
      </div>
      <div>
        <Link to='./home'>
          <button>EXPLORÁ LA TIENDA</button>
        </Link>
      </div>
      <div name='conoceEWine'>
        <ConoceEWine />
      </div>
      <div>
        <h1>Aca van las reseñas bien bonitas</h1>
      </div>
      <div>
        <AboutDevs />
      </div>
      <span>------------------------------------------</span>
      <div>
        <Footer />
      </div>
    </div>
  )
}
