import React from 'react'
import preguntas from './preguntas'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

export default function Preguntas (props) {
  return (
    <Container fluid className='bg-white shadow-lg m-auto rounded mt-5'>
      <Row className='mt-2'>
        <Col className=''>
          <Form.Control size='lg' type='text' placeholder='Escribe tu pregunta...' />
        </Col>
        <Col className=' d-flex justify-content-start'>
          <Button variant='botoncito' size='lg'>Preguntar</Button>
        </Col>
      </Row>
      <Accordion flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> <h4 className='text-muted' style={{ fontFamily: 'var(--font-family-1)' }}>Preguntas y Respuestas</h4></Accordion.Header>
          <Accordion.Body>
            {preguntas.map((e) => {
              return (
                <Row key={e.id} className='mb-1 rounded shadow-lg'>
                  <Row className='fs-4 ms-1'>{e.Nombre}:</Row>
                  <Row className='fs-5 ms-1'>{e.Preguntas}</Row>
                  <Row className='fs-5 ms-3 text-black-50'>{e.Respuesta}</Row>
                  <br />
                </Row>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

    </Container>
  )
}
