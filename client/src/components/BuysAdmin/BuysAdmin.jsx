import React from 'react'
import DataTableBuys from '../DataTableBuys/DataTableBuys.jsx'
import ProductsCharts from '../ProductsCharts/ProductsCharts'
import { Container, Row } from 'react-bootstrap'

function BuysAdmin ({ buys }) {
  return (
    <Container className=''>
      <Row className='text-secondary shadow-sm p-3 mb-5 bg-light rounded'> <h2>COMPRAS</h2></Row>
      {/* fila 1 tabla */}
      <Row className='mb-2 mt-3'>
        <DataTableBuys buys={buys} />
      </Row>
      {/* Chart fila 2 */}
      <Row className='mb-2 mt-3'>
        <ProductsCharts />
      </Row>

    </Container>
  )
}

export default BuysAdmin
