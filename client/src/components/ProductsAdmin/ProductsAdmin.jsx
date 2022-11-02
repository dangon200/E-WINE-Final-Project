import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { postVarietals } from '../../store/actions/actions'
import s from './ProductsAdmin.module.css'
import { useDispatch, useSelector } from 'react-redux'
import TableVarietalAdmin from '../TableVarietalAdmin/TableVarietalAdmin'
// import { schemaFormVarietal } from '../utilities/schemas'

function ProductsAdmin () {
  const [exito, setExito] = useState(false)
  const [fallo, setFallo] = useState(false)
  const dispatch = useDispatch()
  const varietals = useSelector(state => state.allVarietals)
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 d-flex '>
          <div className='col-4 justify-content-center'>
            <TableVarietalAdmin />
          </div>
          <div className='col d-flex flex-row-reverse bd-highlight'>
            <div className=''>
              <div className='d-flex text-secondary shadow-sm p-3 mb-5 w-auto p-3 bg-white rounded'>
                <h2 className={s.btn}>Agregar nuevo varietal:</h2>
              </div>
              <Formik
                initialValues={{
                  name: ''
                }}
                validate={(valores) => {
                  let errores = {} //eslint-disable-line
                  if (!valores.name) {
                    errores.name = 'Debes escribir un nombre'
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                    errores.name = 'El nombre solo puede contener letras y espacios'
                  }
                  return errores
                }}
                onSubmit={(valores, { resetForm }) => {
                  const str = valores.name
                  const str2 = str.charAt(0).toUpperCase() + str.slice(1)
                  if (varietals.includes(str2)) {
                    setFallo(true)
                    setTimeout(() => setFallo(false), 5000)
                  } else {
                    dispatch(postVarietals(str2, valores.description))
                    setExito(true)
                    resetForm()
                    setTimeout(() => setExito(false), 5000)
                  }
                }}
              >
                {({ values, errors }) => (
                  <Form className={s.formulario}>
                    <div>
                      <label htmlFor='name'>Varietal</label>
                      <Field
                        type='text'
                        id='name'
                        name='name'
                        placeholder='nombre'
                      />
                      <ErrorMessage name='name' component={() => (<div className={s.error}>{errors.name}</div>)} />
                    </div>
                    <button type='submit'>Crear</button>
                    {exito && <p className={s.exito}> Varietal creado con éxito</p>}
                    {fallo && <p className={s.fallo}> El varietal ya existe</p>}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsAdmin
