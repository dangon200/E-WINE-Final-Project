import React/* , { useState } */ from 'react'
// import { useSelector } from 'react-redux'
import s from './itemPurchased.module.css'
// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import image from '../../utils/images/vector.jpg'
import axios from 'axios'
import { getUserBuys } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function ItemPurchased ({ currency, totalAmount, paymentMethod, date, status, deliveryId, buyId }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <Row className='w-75 p-3 mb-0 border-bottom rounded-4 fs-4 mt-5'>
      <Row className='border-bottom mb-4'>
        <Col>
          Fecha: {date?.slice(0, 10)}
        </Col>
        <Col>
          #{buyId}
        </Col>
      </Row>
      <Row>
        <Col className={s.image}>
          <img className='img-fluid' src={image} alt={image} />
        </Col>
        <Col className={s.dataContainer}>
          <Row>
            <Col>
              Metodo de pago:
            </Col>
            <Col>
              {paymentMethod}
            </Col>
          </Row>
          <Row>
            <Col>
              Estado del envio:
            </Col>
            <Col className={status !== 'RECIBIDO' ? s.status : s.statusSuccess}>
              {status}
            </Col>
          </Row>
        </Col>
        <Col>
          $ {totalAmount / 100}
        </Col>
        <Col className='d-flex flex-column gap-3'>
          <Row>
            <Button
              className={s.button}
              onClick={async () => {
                const res = await axios.get(`https://e-winespf.herokuapp.com/buyItems/buy/${buyId}`)
                console.log(res.data)
              }}
            >
              Ver Compra
            </Button>
          </Row>
          {status === 'ENVIADO'
            ? <div className='row'>
              <Button
                className={s.button}
                onClick={async () => {
                  const data = {
                    status: 'RECIBIDO'
                  }
                  const delivery = await axios.put(`https://e-winespf.herokuapp.com/delivery/${deliveryId}`, data)
                  if (delivery) {
                    dispatch(getUserBuys(user.id))
                  }
                }}
              >
                Recibi la compra
              </Button>
              </div>  //eslint-disable-line
            : null}
        </Col>
      </Row>
    </Row>
  )
}
