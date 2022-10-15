import style from './formCreatePubli.module.css'
import { useFormik } from 'formik'
import { useState } from 'react'
import { schemaFormPubli, uplodCloudinary } from '../utilities/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, postPublication } from '../../store/actions/actions'
import { useHistory } from 'react-router-dom'

export default function FormCreatePubli () {
  const history = useHistory()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  if (!products.length) dispatch(getProducts())

  const { values, setFieldValue, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues: { productId: '', title: '', price: 0, description: '', count: 0, image: {} },
    validationSchema: schemaFormPubli,
    onSubmit: async (values) => {
      try {
        const url = await uplodCloudinary(values.image)
        values.image = url
        dispatch(postPublication(values))
          .then(data => {
            setSend(true)
            setTimeout(() => {
              setSend(false)
              setTimeout(() => {
                history.push(`/publication/${data.payload.id}`)
              }, 1000)
            }, 3000)
            resetForm()
          })
      } catch (error) {
        console.log(error)
      }
    }
  })
  const [send, setSend] = useState(false)
  return (
    <section className='container'>
      <div className='row'>
        <h2>Create a Publication</h2>
        <form onSubmit={handleSubmit} autoComplete='off' className='card d-flex justify-content-center mx-auto my-3 p-5'>

          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label htmlFor='title' className='fs-3'>Title <span>*</span></label>
              <input
                className={`form-control ${touched.title ? errors.title ? 'is-invalid' : 'is-valid' : null}`}
                type='text'
                placeholder='Title'
                name='title'
                id='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && <p className='invalid-feedback fs-4'>{errors.title}</p>}
            </div>
            <div className='form-group col-md-12 '>
              <label htmlFor='price' className='fs-3'>Price<span>*</span></label>
              <input
                className={`form-control ${touched.price ? errors.price ? 'is-invalid' : 'is-valid' : null}`}
                type='number'
                placeholder='Price'
                name='price'
                id='price'
                min='1'
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && touched.price && <p className='invalid-feedback fs-4'>{errors.price}</p>}
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-12 '>
              <label htmlFor='count' className='fs-3'>Count<span>*</span></label>
              <input
                className={`form-control ${touched.count ? errors.count ? 'is-invalid' : 'is-valid' : null}`}
                type='number'
                placeholder='Count'
                name='count'
                id='count'
                min='1'
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.count && touched.count && <p className='invalid-feedback fs-4'>{errors.count}</p>}
            </div>
            <div className='form-group col-md-12 '>
              <label htmlFor='img' className='fs-3'>Image<span>*</span> </label>
              <input
                className={`form-control ${touched.image ? errors.image ? 'is-invalid' : 'is-valid' : null}`}
                type='file'
                name='image'
                onBlur={handleBlur}
                id='img'
                onChange={(e) => {
                  setFieldValue('image', e.target.files[0])
                }}
              />
              {errors.image && touched.image && <p className='invalid-feedback fs-4'>{errors.image}</p>}
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <textarea
                className={`form-control mt-4 ${touched.description ? errors.description ? 'is-invalid' : 'is-valid' : null}`}
                name='description'
                id='description'
                cols='30'
                rows='4npm'
                placeholder='Descript your publication'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor='description' className='fs-3' />
              {errors.description && touched.description && <p className='invalid-feedback fs-4'>{errors.description}</p>}

            </div>
            <div>
              <select
                name='productId'
                id='productId'
                onChange={handleChange}
                className={`form-select mb-3 ${touched.productId ? errors.productId ? 'is-invalid' : 'is-valid' : null}`}
                onBlur={handleBlur}
              >
                <option value=''>Select a product</option>
                {products && products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
              </select>
              {errors.productId && touched.productId && <p className='invalid-feedback fs-4'>{errors.productId}</p>}
            </div>
          </div>
          <button type='submit' className='btn btn-primary btn-block btn-lg mt-4'>Create</button>
          {send && <div className={style.send}>Publication created</div>}
        </form>

      </div>

    </section>
  )
}
