// import style from './LandingPage.module.css'
import React from 'react'

import ConoceEWine from './ConoceEWine'
import AboutDevs from './AboutDevs'
import Footer from '../Footer/Footer.jsx'

import Button from '../Button/Button.jsx'
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
        <Button link='/about' content='CONOCÉ SOBRE E-WINE' />
      </div>
      <div>
        <Button link='/home' content='EXPLORÁ LA TIENDA' />
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
