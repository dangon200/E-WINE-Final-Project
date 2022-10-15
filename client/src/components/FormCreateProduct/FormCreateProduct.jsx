// import style from './formCreateProduct.module.css'
// import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { varietales, provinces, types } from '../utilities/data'
// import { uplodCloudinary } from '../utilities/schemas'
// import { postProduct } from '../../store/actions/actions'

// name, type, varietal, origin, img, cellar

export default function FormCreateProduct () {
  // const dispatch = useDispatch() //
  const { values, handleChange, handleBlur, setFieldValue } = useFormik({
    initialValues: { name: '', type: '', varietal: '', origin: '', img: '', cellar: '' }
  })
  return (
    <>
      {console.log(values)}
      <section className='container user-select-none '>
        <h2>Crea un Producto</h2>
        <form className='card d-flex justify-content-center mx-auto my-3 p-5'>

          <div className='form-group col-md-12'>
            <label htmlFor='name' className='fs-3'>Nombre<span>*</span></label>
            <input
              type='text'
              placeholder='Nombre'
              name='name'
              id='name'
              className='form-control'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='type' className='fs-3'>Tipo<span>*</span></label>
            <select
              name='type'
              id='type'
              className='form-select mb-3'
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Select a type</option>
              {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='varietal' className='fs-3'>Varietal<span>*</span></label>
            <select
              name='varietal'
              id='varietal'
              className='form-select mb-3'
              value={values.varietal}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Select Varietal</option>
              {varietales.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>

          <div className='form-group col-md-12 '>
            <label htmlFor='origin' className='fs-3'>Provincia<span>*</span></label>
            <select
              name='origin'
              id='origin'
              className='form-select mb-3'
              value={values.origin}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Selecciona la Provincia</option>
              {provinces.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div className='form-group col-md-12'>
            <label htmlFor='img' className='fs-3'>Imagen<span>*</span> </label>
            <input
              type='file'
              name='img'
              onBlur={handleBlur}
              id='img'
              onChange={(e) => {
                setFieldValue('img', e.target.files[0])
              }}
            />
          </div>
          <div className='form-group col-md-12'>
            <label htmlFor='cellar' className='fs-3'>Bodega<span>*</span></label>
            <input
              type='cellar'
              placeholder='Bodega'
              name='cellar'
              id='cellar'
              className='form-control'
              value={values.cellar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

        </form>
      </section>
    </>
  )
}
