import React, { useContext }/* , { useState } */ from 'react'
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
import { SocketContext } from '../../context/socket'
const urlApi = 'https://e-winespf.herokuapp.com'
// const urlApi = 'http://localhost:3001'

export default function ItemPurchased ({ currency, totalAmount, paymentMethod, date, status, deliveryId, buyId, receiverId }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(date)

  const socket = useContext(SocketContext)
  const TotalCompra = () => {
    if (paymentMethod === 'card') {
      const total = totalAmount / 100
      return total
    } else return totalAmount
  }
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
        <Col>
          Valor de la compra: $<TotalCompra />
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
                    const delivery = await axios.put(`${urlApi}/delivery/${deliveryId}`, data)
                    if (delivery) {
                      dispatch(getUserBuys(user.id))
                    }
                    const res = await axios.get(`https://e-winespf.herokuapp.com/buyItems/buy/${buyId}`)
                    console.log(res)
                    socket.emit('receiveDelivery', {
                      senderName: user.username,
                      receiverId: res.data[0].sellerId
                    })
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
