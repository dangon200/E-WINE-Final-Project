// import style from './LandingPage.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ConoceEWine from './ConoceEWine'
import AboutDevs from './AboutDevs'
import Footer from '../Footer/Footer.jsx'
import NavBar from '../Nav/Nav.jsx'

export default function LandingPage () {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Descrubrí E-wine</h1>
      </div>
      <div>
        <button>
          <a href='conoceEWine'>CONOCÉ SOBRE E-WINE</a>
        </button>
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
      <div>
        <div>
          <a href='pal face'>Facebook</a>
        </div>
        <div>
          <a href='pal face'> Henry</a>
        </div>
        <div>
          <a href='pal face'>Instagram</a>
        </div>
        <div>
          <a href='pal face'>Youtube</a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
