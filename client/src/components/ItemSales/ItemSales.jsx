import React from 'react'
import { Link } from 'react-router-dom'
import s from './itemSales.module.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch } from 'react-redux'
import { deliveryStatus } from '../../store/actions/actions'
import image from '../../utils/images/vector.jpg'

export default function ItemSales ({ name, envio, totalAmount, paymentMethod, date, deliveryId }) {
  /* const {  } = props */
  const dispatch = useDispatch()
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
          <Row>
            Nombre del comprador: {name}
          </Row>
          <Row>
            Estado de envio: {envio}
          </Row>
        </Col>
        <Col>
          $ {totalAmount / 100}
        </Col>
        <Col className='d-flex flex-column justify-content-start align-items-end gap-3'>
          <Row>
            <Button
              className={s.button}
            >
              <Link className='text-light text-decoration-none' to=''>
                Ver Venta
              </Link>
            </Button>
          </Row>
          {envio.length === 9
            ? <div className='row'>
              <Button
                className={s.button}
                onClick={() => {
                  dispatch(deliveryStatus(deliveryId, 'ENVIADO'))
                }}
              >
                Despachar envio
              </Button>
              </div>  //eslint-disable-line
            : null}
        </Col>
      </Row>
    </Row>
  )
}
