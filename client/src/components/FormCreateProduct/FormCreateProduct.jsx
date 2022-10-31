import style from './formCreateProduct.module.css'
import { useState } from 'react'
import { schemaFormProduct, uplodCloudinary } from '../utilities/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { provinces, types } from '../utilities/data'
import { postProduct } from '../../store/actions/actions'

// name, type, varietal, origin, img, cellar

export default function FormCreateProduct () {
  const dispatch = useDispatch() //
  const varietals = useSelector(state => state.allVarietals)
  const { values, handleChange, handleBlur, setFieldValue, errors, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      type: '',
      varietal: '',
      origin: '',
      img: '',
      cellar: ''
    },
    validationSchema: schemaFormProduct,
    onSubmit: async (values, { resetForm }) => {
      try {
        const url = await uplodCloudinary(values.img)
        values.img = url
        dispatch(postProduct(values))
        setSend(!send)
        resetForm()
        setTimeout(() => {
          setSend(!send)
        }, 2000)
      } catch (error) {
        console.log(error)
      }
    }
  })
  const [send, setSend] = useState(false)
  return (
    <div className={style.globalContainer}>
      <section className='container user-select-none '>
        <h2>Crea un Producto</h2>
        <form onSubmit={handleSubmit} autoComplete='off' className='card d-flex justify-content-center mx-auto my-3 p-5'>

          <div className='form-group col-md-12'>
            <label htmlFor='name' className='fs-3'>Nombre<span>*</span></label>
            <input
              type='text'
              placeholder='Nombre'
              name='name'
              id='name'
              className={`form-control ${touched.name ? errors.name ? 'is-invalid' : 'is-valid' : null}`}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='type' className='fs-3'>Tipo<span>*</span></label>
            <select
              name='type'
              id='type'
              className={`form-select mb-3 ${touched.type ? errors.type ? 'is-invalid' : 'is-valid' : null}`}
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Selecciona el tipo</option>
              {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            {errors.type && touched.type && <p className='text-danger'>{errors.type}</p>}
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='varietal' className='fs-3'>Varietal<span>*</span></label>
            <select
              name='varietal'
              id='varietal'
              className={`form-select mb-3 ${touched.varietal ? errors.varietal ? 'is-invalid' : 'is-valid' : null}`}
              value={values.varietal}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Selecciona Varietal</option>
              {varietals.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
            {errors.varietal && touched.varietal && <p className='text-danger'>{errors.varietal}</p>}
          </div>

          <div className='form-group col-md-12 '>
            <label htmlFor='origin' className='fs-3'>Provincia<span>*</span></label>
            <select
              name='origin'
              id='origin'
              className={`form-select mb-3 ${touched.origin ? errors.origin ? 'is-invalid' : 'is-valid' : null}`}
              value={values.origin}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Selecciona la Provincia</option>
              {provinces.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
            {errors.origin && touched.origin && <p className='text-danger'>{errors.origin}</p>}
          </div>
          <div className='form-group col-md-12'>
            <label htmlFor='img' className='fs-3'>Imagen<span>*</span> </label>
            <input
              className={`form-control ${touched.img ? errors.img ? 'is-invalid' : 'is-valid' : null}`}
              type='file'
              name='img'
              onBlur={handleBlur}
              id='img'
              onChange={(e) => {
                setFieldValue('img', e.target.files[0])
              }}
            />
            {errors.img && touched.img && <p className='text-danger'>{errors.img}</p>}
          </div>
          <div className='form-group col-md-12'>
            <label htmlFor='cellar' className='fs-3'>Bodega<span>*</span></label>
            <input
              type='cellar'
              placeholder='Bodega'
              name='cellar'
              id='cellar'
              className={`form-control ${touched.cellar ? errors.cellar ? 'is-invalid' : 'is-valid' : null}`}
              value={values.cellar}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.cellar && touched.cellar && <p className='text-danger'>{errors.cellar}</p>}
          </div>
          <button
            type='submit'
            className={`btn btn-success btn-block btn-lg mt-4 ${isSubmitting && 'disabled'}`}
            disabled={isSubmitting && true}
          >Crear Producto
          </button>
          {send && <div className={style.send}>Producto creado con éxito!</div>}
        </form>
      </section>
    </div>
  )
}
