import style from './formLogin.module.css'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useState } from 'react'
import { schemaLogin } from '../utilities/schemas'

export default function FormLogin () {
  const cookies = new Cookies()

  const { values, handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting } = useFormik({ //eslint-disable-line

    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schemaLogin,

    onSubmit: async (values) => {
      fetch('https://e-winespf.herokuapp.com/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password
        }),
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      })

        .then((res) => res.json())
        .then((data) => {
          if (typeof data !== 'string') {
            cookies.set('TOKEN', data, {
              path: '/'
            })
          } else {
            setError(!err)
            setTimeout(() => { setError(!err) }, 3000)
          }
        })
    }

  })
  const [err, setError] = useState(false)

  return (
    <div className='user-select-none'>

      <button type='button' className={style.navlink} data-bs-toggle='modal' data-bs-target='#exampleModal'>
        Iniciar sesión
      </button>

      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>Iniciar sesion</h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit} className='card d-flex justify-content-center mx-auto my-3 p-5' autoComplete='off'>
                <div className='row justify-content-center'>
                  <div className='col-12'>
                    <label htmlFor='email' className='fs-3'>Email</label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : null}`}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? <div className='invalid-feedback fs-4'>{errors.email}</div> : null}
                  </div>
                  <div className='col-12'>
                    <label htmlFor='password' className='fs-3'>Password</label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null}`}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password ? <div className='invalid-feedback fs-4'>{errors.password}</div> : null}
                  </div>
                  <button
                    data-bs-dismiss='modal'
                    type='submit'
                    className={`btn btn-primary mt-3 ${isSubmitting && 'disabled'}`}
                    disabled={isSubmitting && true}
                  >
                    Iniciar sesión
                  </button>
                  {err &&
                    <div className='alert alert-danger mt-3' role='alert'><p>Correo o contraseña incorrecto</p></div>}
                  {
                  /* <button
                    className={`btn btn-success mt-5 ${isSubmitting && 'disabled'}`}
                    disabled={isSubmitting && true}
                  >
                    Iniciar sesión con GitHub
                  </button> */}
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
              <Link to='/register'>
                <button
                  data-bs-dismiss='modal'
                  className={`btn btn-info ${isSubmitting && 'disabled'}`}
                  disabled={isSubmitting && true}
                >
                  Sino tienes cuenta !Crea tu Cuenta
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
