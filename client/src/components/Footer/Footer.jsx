import React from 'react'
import {
  GrInstagram,
  GrTwitter,
  GrGithub,
  GrFacebookOption
} from 'react-icons/gr'
import { IconContext } from 'react-icons'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import './style.css'

export default function Footer () {
  return (
    <Container id='cont' fluid>
      <Row xs={1} sm={4} className='text-center'>
        <Col>
          <h1 className='text-capitalize fw-bold pb-4 pt-5'>E-Wine</h1>
          <span className='fw-bold fs-4'>Una forma diferente de comprar vino</span>
        </Col>
        <Col className='text-center text-md-start mt-4'>
          <div className='mx-auto mb-4'>
            <ul className='fs-4'>
              <li className='fs-1 fw-bold'>COMPRAS</li>
              <br />
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/carrito'>
                <li>Carrito</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/userPurchased'>
                <li>Tus compras</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/user/favorites'>
                <li>Tus favoritos</li>
              </Link>

            </ul>
          </div>
        </Col>
        <Col className='text-center text-md-start mt-4'>
          <div className='mx-auto mb-4'>
            <ul className='fs-4'>
              <li className='fs-1 fw-bold'>ACERCA DE</li>
              <br />
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/home'>
                <li>E-Wine</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/about'>
                <li>Developers</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/'>
                <li>Proyecto</li>
              </Link>
            </ul>
          </div>
        </Col>
        <Col className='text-center text-md-start mt-4'>
          <div className='mx-auto mb-4 '>
            <ul className='fs-4'>
              <li className='fs-1 fw-bold'>AYUDA</li>
              <br />
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/'>
                <li>Preguntas Frecuentes</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/'>
                <li>Terminos y condiciones</li>
              </Link>
              <Link style={{ color: '#484D55' }} className='text-decoration-none' to='/about'>
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className='pt-5 pb-5 row justify-content-center'>
        <Col xs lg='2'>
          <a href='https://www.instagram.com/ewine.marketplace/'>
            <IconContext.Provider value={{ size: '3em', className: 'instagram', color: '#484D55' }}>
              <GrInstagram />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://www.facebook.com/profile.php?id=100086790943958'>
            <IconContext.Provider value={{ size: '3em', className: 'facebook', color: '#484D55' }}>
              <GrFacebookOption />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://twitter.com/EWinemarket'>
            <IconContext.Provider value={{ size: '3em', className: 'twitter', color: '#484D55' }}>
              <GrTwitter />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://github.com/dangon200/E-WINE-Final-Project'>
            <IconContext.Provider value={{ size: '3em', className: 'github', color: '#484D55' }}>
              <GrGithub />
            </IconContext.Provider>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
