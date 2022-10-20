import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function FormLogin () {
  const cookies = new Cookies()

  const { values, handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting } = useFormik({ //eslint-disable-line

    initialValues: {
      email: '',
      password: ''
    },

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
            window.location.href = '/home'
          } console.log(data)
        })
    }

  })
  return (
    <div className='container user-select-none'>
      <form onSubmit={handleSubmit} className='card d-flex justify-content-center mx-auto my-3 p-5' autoComplete='off'>
        <div className='row justify-content-center'>
          <h2>Inicie sesión</h2>
          <div className='col-12'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className={`form-control ${touched.email ? errors.email ? 'is-invalid' : 'is-valid' : null}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? <div className='invalid-feedback'>{errors.email}</div> : null}
          </div>
          <div className='col-12'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className={`form-control ${touched.password ? errors.password ? 'is-invalid' : 'is-valid' : null}`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? <div className='invalid-feedback'>{errors.password}</div> : null}
          </div>
          <button
            type='submit'
            className={`btn btn-primary mt-3 ${isSubmitting && 'disabled'}`}
            disabled={isSubmitting && true}
          >
            Iniciar sesión
          </button>
          <Link to='/register'>
            <button
              className={`btn btn-info mt-3 ${isSubmitting && 'disabled'}`}
              disabled={isSubmitting && true}
            >
              Crea Cuenta
            </button>
          </Link>

          <button
            className={`btn btn-success mt-5 ${isSubmitting && 'disabled'}`}
            disabled={isSubmitting && true}
          >
            Iniciar sesión con GitHub
          </button>
        </div>
      </form>

    </div>
  )
}
