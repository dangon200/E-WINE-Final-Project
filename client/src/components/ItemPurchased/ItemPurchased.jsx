import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import s from './itemPurchased.module.css'
// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import image from '../../utils/images/vector.jpg'

export default function ItemPurchased ({ currency, totalAmount, paymentMethod, date, publicationId }) {
  /* const {  } = props */
  return (
    <Row className='w-75 bg-light p-3 mb-0 border-bottom rounded-4 fs-4 mt-5'>
      <Row className='border-bottom mb-4'>Fecha: {date?.slice(0, 10)} </Row>
      <Row>
        <Col className={s.image}>
          <img className='img-fluid' src={image} alt={image} />
        </Col>
        <Col className='ms-4'>
          <Row>
            Metodo de pago: {paymentMethod}
          </Row>
        </Col>
        <Col>
          $ {totalAmount / 100}
        </Col>
        <Col className='d-flex flex-column gap-3'>
          <Row>
            <Button
              className={s.button}
              disabled
            >
              <Link className='text-light text-decoration-none' to=''>
                Ver compra
              </Link>
            </Button>
          </Row>
          {/* <Row>
            <Button className={s.button2}>
              <Link className='text-dark text-decoration-none' to={`/publication/${publicationId}`}>
                Ver Publicación
              </Link>
            </Button>
          </Row> */}
        </Col>
      </Row>
    </Row>
  )
}
