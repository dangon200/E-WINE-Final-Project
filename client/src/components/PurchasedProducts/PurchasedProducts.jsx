
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import s from './purchasedProducts.module.css'
import Sidebar from '../Sidebar/Sidebar'

export default function PurchasedProducts () {
  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Mis Compras</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
