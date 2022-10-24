import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
// import Button from 'react-bootstrap/esm/Button'
import s from './purchasedProducts.module.css'
import Sidebar from '../Sidebar/Sidebar'
import React, { useEffect } from 'react'
// import s from './itemPurchased.module.css'
// import image from '../../utils/images/vector.jpg'
import { getUserBuys } from '../../store/actions/actions'
import ItemPurchased from '../ItemPurchased/ItemPurchased'

export default function PurchasedProducts () {
  const buys = useSelector(state => state.buys)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log(buys)
  useEffect(() => { dispatch(getUserBuys(user.id)) }, [dispatch]) //eslint-disable-line
  return (
    <div className='grid h-100 pb-5'>
      <Container fluid style={{ height: '100%' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Mis Compras</h1>
            {buys.length > 0 && buys.map((b) => (
              <ItemPurchased
                key={b.id}
                currency={b.currency}
                totalAmount={b.totalAmount}
                paymentMethod={b.paymentMethod}
                date={b.createdAt}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
