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
                <div className={style.text}>CELLAR: <span className='text-secondary'>{publication.cellar}</span></div>
              </Stack>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='masInfo' title='MAS INFO'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores, minus hic nam unde earum quos iure consequatur eius nemo quam, natus nostrum eos temporibus, fugiat illo dolorum sapiente atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere eius eveniet omnis. Ipsa magni nulla maxime. Ad odio corporis nisi? Assumenda animi laudantium, soluta et distinctio nisi doloribus minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus sequi soluta dolores minus voluptates deleniti nulla adipisci similique distinctio sit quos delectus ullam consequuntur quisquam accusantium blanditiis impedit fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores molestias iusto. Magnam facilis ipsam repellat cupiditate earum omnis, sequi quia exercitationem necessitatibus doloribus harum numquam. Perferendis non id beatae?
        </Tab>
        {/* Agregar mas en caso de ser necesario */}
        {/* <Tab eventKey='contact' title='Contact'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quam, provident aliquid deserunt perspiciatis aspernatur, facilis dolore minus nesciunt dicta vel! At odio amet quos illum impedit cumque facere hic!
        </Tab> */}
      </Tabs>
    </Container>
  )
}
