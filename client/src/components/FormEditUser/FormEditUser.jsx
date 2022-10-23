/* import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card' */
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Sidebar from '../Sidebar/Sidebar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import s from './formEditUser.module.css'

export default function FormEditUser () {
  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Datos de usuario</h1>
            <Container className={s.formContainer}>
              <Form className='w-50 py-5 d-flex flex-column m-auto fs-4'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Control className='p-3 fs-4' type='email' placeholder='Direccion de Email' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Control className='p-3 fs-4' type='password' placeholder='Contraseña' />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control className='p-3 fs-4' type='email' placeholder='Nueva contraseña' />
                </Form.Group>
                <Button className='w-25 p-3 fs-4' variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
