/* import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card' */
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Sidebar from '../Sidebar/Sidebar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import s from './formEditUser.module.css'
import { useFormik } from 'formik'
import { schemaValidateChangesOfUser } from '../utilities/schemas'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import Cookies from 'universal-cookie'

export default function FormEditUser () {
  // const urlApi = 'http://localhost:3001'
  const urlApi = 'https://e-winespf.herokuapp.com'
  const user = useSelector(state => state.user)

  const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      repeatNewPassword: ''
    },
    validationSchema: schemaValidateChangesOfUser,
    onSubmit: async (values, { resetForm }) => {
      const data = {
        password: values.password,
        password2: values.newPassword
      }
      try {
        const response = await axios.put(`${urlApi}/users/${user.id}`, data)
        console.log(response)
        if (typeof response.data === 'string') {
          setMesagge(response.data)
          setError(true)
          setTimeout(() => { setError(false) }, 4000)
        } else {
          resetForm()
          setMesagge('Se actualizo el password correctamente')
          setSend(true)
        }
      } catch (error) {
        setError(true)
        console.log(error)
        setTimeout(() => { setError(false) }, 2000)
      }
    }
  })
  const [send, setSend] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMesagge] = useState('')

  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto min-vh-100 pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col className={s.container}>
            <h1>Datos de usuario</h1>
            <Form onSubmit={handleSubmit} className={s.form}>
              <Form.Group>
                <Form.Control
                  className={`p-3 fs-4 ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null}`}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Ingrese su contraseña actual'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password ? <div className='invalid-feedback fs-4'>{errors.password}</div> : null}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={`p-3 fs-4
                      ${touched.newPassword ? errors.newPassword ? 'is-invalid' : 'is-valid' : null}`}
                  type='password'
                  id='newPassword'
                  placeholder='Nueva contraseña'
                  value={values.newPassword}
                  name='newPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.newPassword && errors.newPassword ? <div className='invalid-feedback fs-4'>{errors.newPassword}</div> : null}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  className={`p-3 fs-4
                      ${touched.repeatNewPassword ? errors.repeatNewPassword ? 'is-invalid' : 'is-valid' : null}`}
                  type='password'
                  id='repeatNewPassword'
                  placeholder='Repetir nueva contraseña'
                  value={values.repeatNewPassword}
                  name='repeatNewPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.repeatNewPassword && errors.repeatNewPassword ? <div className='invalid-feedback fs-4'>{errors.repeatNewPassword}</div> : null}
              </Form.Group>
              {send && <div class='alert alert-success' role='alert'>{message}</div>}
              {error && <div class='alert alert-danger' role='alert'>{message}</div>}
              <Row className='d-flex justify-content-center'>
                <Button
                  className='w-50 p-3 fs-4'
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
        </Row>
      </Container>
    </div>
  )
}
