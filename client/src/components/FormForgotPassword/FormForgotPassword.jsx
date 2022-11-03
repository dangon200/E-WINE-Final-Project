import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import { schemaValidateEmail } from '../utilities/schemas'
import axios from 'axios'
import { useState } from 'react'
import s from './forgotPassword.module.css'
// import Cookies from 'universal-cookie'

export default function FormForgotPassword () {
  const urlApi = 'https://e-winespf.herokuapp.com'
  // const urlApi = 'http://localhost:3001'

  const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: schemaValidateEmail,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values)
        const response = await axios.post(`${urlApi}/users/forgotPassword`, values)
        console.log(response)
        if (typeof response.data === 'string') {
          setMesagge(response.data)
          setError(true)
          setTimeout(() => { setError(false) }, 4000)
        } else {
          resetForm()
          setMesagge('Genial!, pronto le estaremos enviando un mail para recuperar la contraseña!')
          setSend(true)
        }
      } catch (error) {
        setError(true)
        console.log(error)
        setTimeout(() => { setError(false) }, 3000)
      }
    }
  })
  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMesagge] = useState('')

  return (
    <>
      <Container className={`d-flex justify-content-center align-items-start gap-5 ${s.container}`} fluid style={{ height: '100vh' }}>
        <Col className='mt-5'>
          <p className='fs-1 mt-5'>Ingrese el email con el que se registró</p>
          <Form onSubmit={handleSubmit} className='d-flex flex-column p-4 justify-content-center align-items-center gap-5 w-100 mt-3'>
            <Form.Group className='w-75'>
              <Form.Control
                className={`p-3 fs-4 ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : null}`}
                type='email'
                name='email'
                placeholder='Ingrese su email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? <div className='invalid-feedback fs-4'>{errors.email}</div> : null}
            </Form.Group>
            {send && <div class='alert alert-success' role='alert'>{message}</div>}
            {error && <div class='alert alert-danger' role='alert'>{message}</div>}
            <Row className={s.button}>
              <Button
                className='w-100 p-3 fs-4'
                style={{ backgroundColor: '#91091E', border: 'none' }}
                type='submit'
                onSubmit={handleSubmit}
              >
                Enviar
              </Button>
            </Row>
            {/* <Button
                  className='w-50 p-3 fs-4'
                  style={{ backgroundColor: '#91091E', border: 'none' }}
                  type='submit'
                  onSubmit={handleSubmit}
                >
                  Enviar
                </Button> */}
          </Form>
        </Col>
      </Container>
    </>
  )
}
