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
import ModaleDetail from '../ModaleDetail/ModaleDetail'
import DeliveryTracker from '../DeliveryTracker/DeliveryTracker'

export default function ItemPurchased ({ currency, totalAmount, date, status, deliveryId, buyId }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <Row className='w-75 p-3 mb-0 border-bottom border-2 rounded-4 fs-4 mt-5'>
      {/* <Row className='border-bottom mb-4'>
        <Col className='text-start'>
          Fecha: {date?.slice(0, 10)}
        </Col>
        <Col>
          Id de compra: #{buyId}
        </Col>
      </Row> */}
      <Row>
        <Col className={s.image}>
          <img className='img-fluid' src={image} alt={image} />
        </Col>
        <Col className={s.dataContainer}>
          {/* <Row>
            <Col>
              Metodo de pago:
            </Col>
            <Col>
              {paymentMethod}
            </Col>
          </Row> */}
          <Row>
            <Col className={s.status}>
              Estado del envio:
            </Col>
          </Row>
          <Row className={s.delivery}>
            <DeliveryTracker status={status} />
          </Row>
        </Col>
        <Col className='d-flex justify-content-start align-items-center'>
          <Row className={s.valor}>
            Valor de compra: $ {totalAmount / 100}
          </Row>
        </Col>
        <Col className={`d-flex flex-column gap-3 ${s.modal}`}>
          <Row>
            <ModaleDetail
              className={s.button}
              buttonText='Ver Compra'
              title='Detalle Compra'
              link='/userSales'
              buyId={buyId}
              createAcc
            />
          </Row>
          <Row>
            {status === 'ENVIADO'
              ? <Button
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
                </Button> //eslint-disable-line
              : null}
          </Row>
        </Col>
      </Row>
    </Row>
  )
}
