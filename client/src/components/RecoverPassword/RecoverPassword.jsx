import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import { schemaValidatePasswordEmail } from '../utilities/schemas'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import s from './recoverPassword.module.css'
// import Cookies from 'universal-cookie'
const urlApi = 'https://e-winespf.herokuapp.com'
// const urlApi = 'http://localhost:3001'

export default function RecoverPassword () {
  const user = useSelector(state => state.user)

  const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({
    initialValues: {
      password: '',
      repeatPassword: ''
    },
    validationSchema: schemaValidatePasswordEmail,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.put(`${urlApi}/users/${user.email}`)
        console.log(response)
        if (typeof response.data === 'string') {
          setMesagge(response.data)
          setError(true)
          setTimeout(() => { setError(false) }, 4000)
        } else {
          resetForm()
          setMesagge('Su contraseña ha sido creada')
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
          <p className='fs-1 mt-5'>Ingrese su nueva contraseña</p>
          <Form className='d-flex flex-column p-4 justify-content-center align-items-center gap-5 w-100 mt-3' onSubmit={handleSubmit}>
            <Form.Group className='w-75'>
              <Form.Control
                className={`p-3 fs-4 ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null}`}
                type='password'
                name='password'
                id='password'
                placeholder='Ingrese contraseña'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? <div className='invalid-feedback fs-4'>{errors.password}</div> : null}
            </Form.Group>
            <Form.Group className='w-75'>
              <Form.Control
                className={`p-3 fs-4 ${touched.repeatPassword ? errors.repeatPassword ? 'is-invalid' : 'is-valid' : null}`}
                type='password'
                name='repeatPassword'
                id='repeatPassword'
                placeholder='Repetir contraseña'
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.repeatPassword && errors.repeatPassword ? <div className='invalid-feedback fs-4'>{errors.repeatPassword}</div> : null}
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
