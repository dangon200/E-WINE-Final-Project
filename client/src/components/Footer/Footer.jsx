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
              <li className='fs-1'>COMPRAS</li>
              <br />
              <li>Carrito</li>
              <li>Tus compras</li>
              <li>Vinos Guardados</li>
            </ul>
          </div>
        </Col>
        <Col className='text-center text-md-start mt-4'>
          <div className='mx-auto mb-4'>
            <ul className='fs-4'>
              <li className='fs-1'>ACERCA DE</li>
              <br />
              <Link className='text-decoration-none text-light' to='/'>
                <li>E-Wine</li>
              </Link>
              <Link className='text-decoration-none text-light' to='/'>
                <li>Developers</li>
              </Link>
              <Link className='text-decoration-none text-light' to='/'>
                <li>Proyecto</li>
              </Link>
            </ul>
          </div>
        </Col>
        <Col className='text-center text-md-start mt-4'>
          <div className='mx-auto mb-4 '>
            <ul className='fs-4'>
              <li className='fs-1'>AYUDA</li>
              <br />
              <Link className='text-decoration-none text-light' to='/'>
                <li>Preguntas Frecuentes</li>
              </Link>
              <Link className='text-decoration-none text-light' to='/'>
                <li>Terminos y condiciones</li>
              </Link>
              <Link className='text-decoration-none text-light' to='/'>
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className='pt-5 pb-5 row justify-content-center'>
        <Col xs lg='2'>
          <a href='https://www.instagram.com/ewine.marketplace/'>
            <IconContext.Provider value={{ size: '3em', className: 'instagram', color: 'white' }}>
              <GrInstagram />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://www.facebook.com/profile.php?id=100086790943958'>
            <IconContext.Provider value={{ size: '3em', className: 'facebook', color: 'white' }}>
              <GrFacebookOption />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://twitter.com/EWinemarket'>
            <IconContext.Provider value={{ size: '3em', className: 'twitter', color: 'white' }}>
              <GrTwitter />
            </IconContext.Provider>
          </a>
        </Col>
        <Col xs lg='2'>
          <a href='https://github.com/dangon200/E-WINE-Final-Project'>
            <IconContext.Provider value={{ size: '3em', className: 'github', color: 'white' }}>
              <GrGithub />
            </IconContext.Provider>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
