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
      <div className={`col p-5 ${style.formContainer}`}>
        <div className={`row ${style.container}`}>
          <h2 className='fs-1 fw-semibold'>Crea un Producto</h2>
          <form onSubmit={handleSubmit} autoComplete='off' className={`card d-flex justify-content-center mx-auto my-3 p-5 ${style.form}`}>

            <div className={`form-group col-md-12 ${style.formDiv}`}>
              <label htmlFor='name' className={`fs-3 ${style.formTag}`}>Nombre</label>
              <input
                type='text'
                name='name'
                id='name'
                className={`fs-4 ${style.formInput} ${touched.name ? errors.name ? 'is-invalid' : 'is-valid' : null}`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
            </div>
            <div className={`form-group col-md-12 ${style.formDiv}`}>
              {/* <label htmlFor='type' className={`fs-3 ${style.formTag}`}>Tipo</label> */}
              <select
                name='type'
                id='type'
                className={`fs-4 ${style.formSelect} mb-3 ${touched.type ? errors.type ? 'is-invalid' : 'is-valid' : null}`}
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option className={style.option} value=''>Selecciona el tipo</option>
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              {errors.type && touched.type && <p className='text-danger'>{errors.type}</p>}
            </div>
            <div className={`form-group col-md-12 ${style.formDiv}`}>
              {/* <label htmlFor='varietal' className={`fs-3 ${style.formTag}`}>Varietal</label> */}
              <select
                name='varietal'
                id='varietal'
                className={`fs-4 ${style.formSelect} mb-3 ${touched.varietal ? errors.varietal ? 'is-invalid' : 'is-valid' : null}`}
                value={values.varietal}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option className={style.option} value=''>Selecciona Varietal</option>
                {varietals.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
              {errors.varietal && touched.varietal && <p className='text-danger'>{errors.varietal}</p>}
            </div>

            <div className={`form-group col-md-12 ${style.formDiv}`}>
              {/* <label htmlFor='origin' className={`fs-3 ${style.formTag}`}>Provincia</label> */}
              <select
                name='origin'
                id='origin'
                className={`fs-4 ${style.formSelect} mb-3 ${touched.origin ? errors.origin ? 'is-invalid' : 'is-valid' : null}`}
                value={values.origin}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option className={style.option} value=''>Selecciona la Provincia</option>
                {provinces.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
              {errors.origin && touched.origin && <p className='text-danger'>{errors.origin}</p>}
            </div>
            <div className={`form-group col-md-12 ${style.formDivImage}`}>
              <label htmlFor='img' className={`fs-3 ${style.formTag}`}>Imagen</label>
              <input
                className={`fs-4 ${style.formInputImage} ${touched.img ? errors.img ? 'is-invalid' : 'is-valid' : null}`}
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
            <div className={`form-group col-md-12 ${style.formDiv}`}>
              <label htmlFor='cellar' className={`fs-3 ${style.formTag}`}>Bodega</label>
              <input
                type='cellar'
                name='cellar'
                id='cellar'
                className={`fs-4 ${style.formInput} ${touched.cellar ? errors.cellar ? 'is-invalid' : 'is-valid' : null}`}
                value={values.cellar}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.cellar && touched.cellar && <p className='text-danger'>{errors.cellar}</p>}
            </div>
            <button
              type='submit'
              className={`mt-4 fs-4 ${style.buttonCreateProduct} ${isSubmitting && 'disabled'}`}
              disabled={isSubmitting && true}
            >Crear Producto
            </button>
            {send && <div className={style.send}>Producto creado con éxito!</div>}
          </form>
        </div>
      </div>
    </div>
  )
}
