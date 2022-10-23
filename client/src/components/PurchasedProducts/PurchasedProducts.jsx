import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import s from './purchasedProducts.module.css'
import Sidebar from '../Sidebar/Sidebar'
// import Card from '../Card/Card'

export default function PurchasedProducts () {
  const compras = useSelector(state => state.buy)
  console.log(compras)
  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Mis Compras</h1>
            <Row className='w-75 bg-light p-3 rounded-4 fs-4 mt-5'>
              <Row className='border-bottom mb-4'>Fecha realizada: </Row>
              <Row>
                <Col>
                  Imagen
                </Col>
                <Col>
                  Nombre
                </Col>
                <Col>
                  Proveedor
                </Col>
                <Col className='d-flex flex-column gap-3'>
                  <Row><Button className={s.button}>Ver compra</Button></Row>
                  <Row><Button className={s.button2}>Ver producto</Button></Row>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
