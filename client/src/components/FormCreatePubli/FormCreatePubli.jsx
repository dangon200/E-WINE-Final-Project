import style from './formCreatePubli.module.css'
import axios from 'axios'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import { schemaFormPubli } from '../utilities/schemas'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, postPublication } from '../../store/actions/actions'
import FormCreateProduct from '../FormCreateProduct/FormCreateProduct'
import { AiOutlineReload } from 'react-icons/ai'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'

export default function FormCreatePubli () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  /*  const user = useSelector(state => state.user) */
  const history = useHistory()

  useEffect(() => {
    !token && history.push('/register')
  }, [token, history])

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const { values, setFieldValue, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      productId: '',
      title: '',
      price: 0,
      description: '',
      count: 0,
      image: {},
      userId: token.user.id
    },
    validationSchema: schemaFormPubli,
    onSubmit: async (values, { resetForm }) => {
      // const url = await uplodCloudinary(values.image)
      const cloudName = 'dfq27ytd2'
      const preset = 'cpnushlf'
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

      const formData = new FormData()
      formData.append('upload_preset', preset)
      formData.append('file', values.image)

      const send = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress (e) {
          setCharge(Math.round((e.loaded * 100) / e.total))
        }
      })
      const urlImage = send.data.secure_url

      values.image = urlImage
      console.log(values)
      dispatch(postPublication({ ...values }, token.token))
      resetForm()
      setSend(true)
      setTimeout(() => {
        setSend(false)
      }, 3000
      )
    }
  })
  const [charge, setCharge] = useState(0) // eslint-disable-line
  const [send, setSend] = useState(false)
  const [createProduct, setCreateProduct] = useState(false)
  return (

    <section className={`w-50 container user-select-none my-5 ${style.card}`}>
      <div className='row'>
        <h2>Crear Nueva Publicación</h2>
        <form onSubmit={handleSubmit} autoComplete='off' className='card d-flex justify-content-center mx-auto my-3 p-5'>

          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label htmlFor='title' className='fs-3'>Título <span>*</span></label>
              <input
                required
                className={`form-control ${touched.title ? errors.title ? 'is-invalid' : 'is-valid' : null}`}
                type='text'
                placeholder='Título'
                name='title'
                id='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && <p className='invalid-feedback fs-4'>{errors.title}</p>}
            </div>
            <div className='form-group col-md-12 '>
              <label htmlFor='price' className='fs-3'>Precio<span>*</span></label>
              <input
                className={`form-control ${touched.price ? errors.price ? 'is-invalid' : 'is-valid' : null}`}
                type='number'
                placeholder='Precio'
                name='price'
                id='price'
                min='500'
                max='500000'
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price && touched.price && <p className='invalid-feedback fs-4'>{errors.price}</p>}
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-12 '>
              <label htmlFor='count' className='fs-3'>Stock<span>*</span></label>
              <input
                className={`form-control ${touched.count ? errors.count ? 'is-invalid' : 'is-valid' : null}`}
                type='number'
                placeholder='Count'
                name='count'
                id='count'
                min='1'
                max='10000'
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.count && touched.count && <p className='invalid-feedback fs-4'>{errors.count}</p>}
            </div>
            <div className='form-group col-md-12 '>
              <label htmlFor='img' className='fs-3'>Imagen<span>*</span> </label>
              <input
                className={`form-control ${touched.image ? errors.image ? 'is-invalid' : 'is-valid' : null}`}
                type='file'
                name='image'
                onBlur={handleBlur}
                required
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
                placeholder='Describa su publicación...'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor='description' className='fs-3' />
              {errors.description && touched.description && <p className='invalid-feedback fs-4'>{errors.description}</p>}

            </div>
            <div className='form-group row mx-0'>
              <button type='button' onClick={() => dispatch(getProducts())} className='col-1 btn btn-primary '><AiOutlineReload /></button>
              <div className='col-11 pe-0'>
                <select
                  name='productId'
                  id='productId'
                  onChange={handleChange}
                  className={`form-select ${touched.productId ? errors.productId ? 'is-invalid' : 'is-valid' : null}`}
                  onBlur={handleBlur}
                  value={values.productId}
                >
                  <option defaultValue value=''>Seleccione un producto...</option>
                  {Array.isArray(products) && products.map(product => <option key={product.name} value={product.id}>{product.name}</option>)}
                </select>

              </div>
              {errors.productId && touched.productId && <p className='fs-4'>{errors.productId}</p>}
            </div>
          </div>
          <div className='progress mt-4' style={{ height: 15 }}>
            <div className='progress-bar' role='progressbar' aria-label='Example with label' style={{ width: `${charge}%` }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>{charge}%</div>
          </div>
          <button
            type='submit'
            className={`btn w-50 btn-block btn-lg mt-4 ${style.buttonCreatePubli} ${isSubmitting && 'disabled'}`}
            disabled={isSubmitting && true}
          >Crear Publicación
          </button>

          {send && <div className={style.send}>Publicación creada con éxito!</div>}
        </form>

        <button onClick={() => setCreateProduct(!createProduct)} className={`btn w-50 btn-block btn-lg mt-4 ${style.buttonCreate}`}>{!createProduct ? 'Crear Nuevo Producto' : 'Cerrar Formulario'}</button>

      </div>
      {createProduct && <FormCreateProduct />}
    </section>

  )
}
