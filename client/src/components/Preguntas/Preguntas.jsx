import React from 'react'
import preguntas from './preguntas'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Preguntas (props) {
  return (
    <Container fluid className='bg-white shadow-lg m-auto rounded mt-5'>
      <Row>
        <Col className='border border-dark border-2'>
          <input className='rounded' placeholder='Escribe tu pregunta...' />
          <Button variant='botoncito' size='lg'>Preguntar</Button>
        </Col>
      </Row>
      <Accordion flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> <h4 className='text-muted' style={{ fontFamily: 'var(--font-family-1)' }}>Preguntas y Respuestas</h4></Accordion.Header>
          <Accordion.Body>
            hola
            <div>{preguntas[0].Nombre}</div>
            <div>{preguntas[0].Preguntas}</div>
            <div>{preguntas[0].Respuesta}</div>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

    </Container>
  )
}
