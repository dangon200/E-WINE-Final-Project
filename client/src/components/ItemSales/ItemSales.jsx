import React, { useContext } from 'react'
import s from './itemSales.module.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
/* import { deliveryStatus } from '../../store/actions/actions' */
import image from '../../utils/images/vector.jpg'
import axios from 'axios'
import { getUserSales } from '../../store/actions/actions'
import ModaleDetail from '../ModaleDetail/ModaleDetail'
import DeliveryTracker from '../DeliveryTracker/DeliveryTracker'
import { SocketContext } from '../../context/socket'
const urlApi = 'https://e-winespf.herokuapp.com'
// const urlApi = 'http://localhost:3001'

export default function ItemSales ({ name, envio, totalAmount, paymentMethod, date, deliveryId, buyId, receiverId }) {
  /* const {  } = props */
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const socket = useContext(SocketContext)
  const TotalCompra = () => {
    if (paymentMethod === 'card') {
      const total = totalAmount / 100
      return total
    } else return totalAmount
  }

  return (
    <Row className='w-75 bg-light p-3 mb-0 border-bottom rounded-4 fs-4 mt-5'>
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
            <Col>Metodo de pago:</Col>
            <Col>
              {paymentMethod}
            </Col>
          </Row>
          <Row>
            <Col>
              Nombre del comprador:
            </Col>
            <Col>
              {name}
            </Col>
          </Row>
          <Row>
            <Col className={s.status}>
              Estado del envio:
            </Col>
          </Row>
          <Row>
            <DeliveryTracker status={envio} />
          </Row>
        </Col>
        <Col>
          $<TotalCompra />
        </Col>
        <Col className='d-flex flex-column justify-content-start align-items-end gap-3'>
          <Row>
            <ModaleDetail
              className={s.button}
              buttonText='Ver Venta'
              title='Detalle Venta'
              link='/userSales'
              buyId={buyId}
              createAcc
            />
          </Row>
          {envio === 'PENDIENTE'
            ? <div className='row'>
              <Button
                className={s.button}
                onClick={async () => {
                  const data = {
                    status: 'ENVIADO'
                  }
                  /* dispatch(deliveryStatus(deliveryId, 'ENVIADO')) */
                  const delivery = await axios.put(`${urlApi}/delivery/${deliveryId}`, data)
                  if (delivery) {
                    dispatch(getUserSales(user.id))
                  }
                  socket.emit('sendDelivery', {
                    senderName: user.username,
                    receiverId
                  })
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
