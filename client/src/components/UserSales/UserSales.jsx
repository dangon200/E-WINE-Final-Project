import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useSelector, useDispatch } from 'react-redux'
// import Button from 'react-bootstrap/esm/Button'
import s from './userSales.module.css'
import Sidebar from '../Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { getUserSales } from '../../store/actions/actions'
import ItemSales from '../ItemSales/ItemSales'

export default function UserSales () {
  const dispatch = useDispatch()
  const sales = useSelector(state => state.sales)
  const user = useSelector(state => state.user)
  console.log(sales)
  useEffect(() => {
    dispatch(getUserSales(user.id))
  }, [dispatch])
  return (
    <div className='grid h-100 pb-5'>
      <Container fluid style={{ height: '100%' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Mis Ventas</h1>
            {sales.length > 0 && sales.map((s) => (
              <ItemSales
                key={s.buyId}
                buyId={s.buyId}
                name={s.username}
                image={s.image}
                envio={s.status}
                currency={s.currency}
                totalAmount={s.totalAmount}
                paymentMethod={s.paymentMethod}
                date={s.createdAt}
                deliveryId={s.deliveryId}
                receiverId={s.userId}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
