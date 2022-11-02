import React from 'react'
import DataTableBuys from '../DataTableBuys/DataTableBuys.jsx'
import ProductsCharts from '../ProductsCharts/ProductsCharts'
import { Container, Row, Col } from 'react-bootstrap'

function BuysAdmin ({ buys }) {
  return (
    <Container className='bg-white'>
      <Row className='text-secondary shadow-sm p-3 mb-5 bg-light rounded'> <h2>COMPRAS</h2></Row>
      <Row className='mb-3'>
        {/* Columna 1 */}
        <Col className='border border-2 m-3 bg-light'>
          <DataTableBuys buys={buys} />
        </Col>
        {/* Columna 2 */}
        <Col className='border border-2 m-3 bg-light'>
          <ProductsCharts />
        </Col>
      </Row>

    </Container>
  )
}

export default BuysAdmin
