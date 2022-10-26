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
import { schemaFormPubli } from '../utilities/schemas'

export default function FormEditUser () {
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema: schemaFormPubli,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

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
                      <Form.Control
                        className='p-3 fs-4'
                        type='name'
                        name='username'
                        placeholder='Nombre de usuario'
                        value={values.username}
                        onChange={handleChange}
                        error={errors.username}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Control
                        className='p-3 fs-4'
                        type='password'
                        placeholder='Contraseña'
                        value={values.password}
                        name='password'
                        onChange={handleChange}
                        error={errors.password}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control
                    className='p-3 fs-4'
                    type='password'
                    placeholder='Nueva Contraseña'
                    value={values.repeatPassword}
                    name='repeatPassword'
                    onChange={handleChange}
                    error={errors.repeatPassword}
                  />
                </Form.Group>
                <Button
                  className='w-25 p-3 fs-4'
                  variant='primary'
                  type='submit'
                  onSubmit={handleSubmit}
                >
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
