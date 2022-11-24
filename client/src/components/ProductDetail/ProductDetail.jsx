import React from 'react'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import { Tabs } from 'react-bootstrap/'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import style from './productDetail.module.css'

export default function ProductDetail (props) {
  const { publication } = props
  return (
    <Container className='mt-5 bg-body shadow-lg' fluid>
      <Tabs
        defaultActiveKey='fichaTecnica'
        className='fs-2'
      >
        <Tab eventKey='fichaTecnica' title='FICHA TECNICA'>
          <Row>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <div className={style.text}>TIPO: <span className='text-secondary'>{publication.type}</span></div>
                <div className={style.text}>VARIETAL: <span className='text-secondary'>{publication.varietal}</span></div>
              </Stack>
            </Col>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <div className={style.text}>ORIGEN: <span className='text-secondary'>{publication.origin}</span></div>
                <div className={style.text}>BODEGA: <span className='text-secondary'>{publication.cellar}</span></div>
              </Stack>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='masInfo' title='MAS INFO'>
          <div className='text-start fs-1 mt-5 mb-5 ms-5'>
            <div className={style.text}>DESCRIPCIÓN: <span className='text-secondary'>{publication.description}</span></div>
          </div>
        </Tab>
        {/* Agregar mas en caso de ser necesario */}
        {/* <Tab eventKey='contact' title='Contact'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quam, provident aliquid deserunt perspiciatis aspernatur, facilis dolore minus nesciunt dicta vel! At odio amet quos illum impedit cumque facere hic!
        </Tab> */}
      </Tabs>
    </Container>
  )
}
