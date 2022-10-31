import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { postVarietals } from '../../store/actions/actions'
import s from './ProductsAdmin.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { schemaFormVarietal } from '../utilities/schemas'

function ProductsAdmin () {
  const [exito, setExito] = useState(false)
  const [fallo, setFallo] = useState(false)
  const dispatch = useDispatch()
  const varietals = useSelector(state => state.allVarietals)
  return (
    <div>
      {/* aca deberia renderizar la tabla  que es TableVarietalAdmin pero esta comentado porque me tira error porque no hay varietals */}
      <div>
        <Formik
          initialValues={{
            name: '',
            description: ''
          }}
          validate={(valores) => {
            let errores = {} //eslint-disable-line
            const varietal = 'Graciana'
            if (!valores.name) {
              errores.name = 'Debes escribir un nombre'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
              errores.name = 'El nombre solo puede contener letras y espacios'
            } else if (varietal === valores.name) {
              errores.name = 'El varietal ya existe'
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
              <div>
                <label htmlFor='descripción'>Descripción</label>
                <Field
                  type='text'
                  id='descrption'
                  name='description'
                  placeholder='descripción'
                />
              </div>
              <button type='submit'>Crear</button>
              {exito && <p className={s.exito}> Varietal creado con éxito</p>}
              {fallo && <p className={s.fallo}> El varietal ya existe</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ProductsAdmin
