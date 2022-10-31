import React from 'react'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import { Tabs } from 'react-bootstrap/'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
// import style from './ComentDetail.module.css'
import CommentCard from './CommentCard'

export default function CommentDetail (props) {
  const Comentarios = props.comment
  return (
    <Container className='mt-5 bg-body shadow-lg' fluid>
      <Tabs
        defaultActiveKey='fichaTecnica'
        className='fs-2'
      >
        <Tab eventKey='ComentSom' title='Sommelier'>
          <Row>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <div />
              </Stack>
            </Col>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <br />
              </Stack>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='ComentariosGral' title='Más Opiniones'>
          {Comentarios.map((comentario, idx) => {
            return <CommentCard key={idx} comentario={comentario} />
          })}
        </Tab>
        {/* Agregar mas en caso de ser necesario */}
        {/* <Tab eventKey='contact' title='Contact'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quam, provident aliquid deserunt perspiciatis aspernatur, facilis dolore minus nesciunt dicta vel! At odio amet quos illum impedit cumque facere hic!
        </Tab> */}
      </Tabs>
    </Container>
  )
}
