import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { schemaValidateUser } from '../utilities/schemas'
import { provinces } from '../utilities/data'
import axios from 'axios'

export default function FormLogin () {
  const dispatch = useDispatch() //eslint-disable-line
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      copyPassword: '',
      region: ''
    },
    validationSchema: schemaValidateUser,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios.post('https://e-winespf.herokuapp.com/users', values)
      console.log(response)
      resetForm()
    }
  })
  console.log(values)
  return (
    <div className='container user-select-none'>
      <form onSubmit={handleSubmit} className='card d-flex justify-content-center mx-auto my-3 p-5' autoComplete='off'>
        <div className='row justify-content-center'>
          <h2>Cree su cuenta</h2>
          <div className='col-12'>
            <label htmlFor='username' className='form-label'>Nombre de usuario</label>
            <input
              type='text'
              className={`form-control ${touched.username ? errors.username ? 'is-invalid' : 'is-valid' : ''}`}
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && <p className='text-danger'>{errors.username}</p>}
          </div>
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
          <div className='col-12'>
            <label htmlFor='copyPassword'>Confirmar Password</label>
            <input
              type='password'
              name='copyPassword'
              id='copyPassword'
              className={`form-control ${touched.copyPassword ? errors.copyPassword ? 'is-invalid' : 'is-valid' : null}`}
              value={values.copyPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.copyPassword && errors.copyPassword ? <div className='invalid-feedback'>{errors.copyPassword}</div> : null}
          </div>
          <div className='col-12'>
            <label htmlFor='province'>Provincia</label>
            <select
              name='region'
              id='region'
              className={`form-select ${touched.origin ? errors.origin ? 'is-invalid' : 'is-valid' : null}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.origin}
            >
              <option value=''>Seleccione una provincia</option>
              {provinces.map((province, index) => (<option key={index} value={province}>{province}</option>))}
            </select>
            {touched.origin && errors.origin ? <div className='invalid-feedback'>{errors.origin}</div> : null}
          </div>

          <button type='submit' className='col-6 btn btn-success mt-2'>Enviar</button>
        </div>

      </form>
      <h2>O inicie con:</h2>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary mx-2'>Google</button>
        <button className='btn btn-primary mx-2'>Facebook</button>
      </div>
    </div>
  )
}