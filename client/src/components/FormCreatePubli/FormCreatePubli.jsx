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
      userId: token?.user.id
    },
    validationSchema: schemaFormPubli,
    onSubmit: async (values, { resetForm }) => {
      // const url = await uplodCloudinary(values.image)
      if (typeof token === 'undefined') {
        history.push('/register')
      }
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
        setCharge(0)
      }, 3000
      )
    }
  })
  const [charge, setCharge] = useState(0) // eslint-disable-line
  const [send, setSend] = useState(false)
  const [createProduct, setCreateProduct] = useState(false)
  return (

    <div className={`row w-100 user-select-none ${style.container}`}>
      {/* <div className={`col ${style.imgContainer}`}>
        Crear publicacion
      </div> */}
      <div className={`col p-5 ${style.formContainer}`}>
        <div className='row'>
          <h2 className='fs-1 mb-5 fw-semibold'>Crear Nueva Publicación</h2>
          <form onSubmit={handleSubmit} autoComplete='off' className={`card d-flex justify-content-center mx-auto my-3 p-5 ${style.form}`}>
            <div className='form-row'>
              <div className={`form-group col-md-12 ${style.formDiv}`}>
                <label htmlFor='title' className={`fs-3 ${style.formTag}`}>Título</label>
                <input
                  required
                  className={`fs-4 ${style.formInput} ${touched.title ? errors.title ? 'is-invalid' : 'is-valid' : null}`}
                  type='text'
                  name='title'
                  id='title'
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title && <p className='invalid-feedback fs-4'>{errors.title}</p>}
              </div>
              <div className={`form-group col-md-12 ${style.formDiv}`}>
                <label htmlFor='price' className={`fs-3 ${style.formTag}`}>Precio</label>
                <input
                  className={`fs-4 ${style.formInput} ${touched.price ? errors.price ? 'is-invalid' : 'is-valid' : null}`}
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
              <div className={`form-group col-md-12 ${style.formDiv}`}>
                <label htmlFor='count' className={`fs-3 ${style.formTag}`}>Stock</label>
                <input
                  className={`fs-4 ${style.formInput} ${touched.count ? errors.count ? 'is-invalid' : 'is-valid' : null}`}
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
              <div className={`col-md-12 ${style.formDiv}`}>
                <label htmlFor='img' className={`fs-3 ${style.formTag}`}>Imagen </label>
                <input
                  className={`fs-4 pb-5 ${style.formInputImage} ${touched.image ? errors.image ? 'is-invalid' : 'is-valid' : null}`}
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
                  className={`fs-4 mt-5 mb-4 ${style.textarea} ${touched.description ? errors.description ? 'is-invalid' : 'is-valid' : null}`}
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
              <div className={`form-group row mx-0 ${style.selectRow}`}>
                <button type='button' onClick={() => dispatch(getProducts())} className={`col-2 ${style.buttonReload}`}><AiOutlineReload size={20} /></button>
                <div className={`col-10 pe-0 ${style.select}`}>
                  <select
                    name='productId'
                    id='productId'
                    onChange={handleChange}
                    className={`form-select fs-4 ${touched.productId ? errors.productId ? 'is-invalid' : 'is-valid' : null}`}
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
              className={`fs-4 mt-4 ${style.buttonCreatePubli} ${isSubmitting && 'disabled'}`}
              disabled={isSubmitting && true}
            >Crear Publicación
            </button>
            {send && <div className={style.send}>Publicación creada con éxito!</div>}
          </form>

          <a className='text-decoration-none' href='#formCreateProduct'><button onClick={() => setCreateProduct(!createProduct)} className={`fs-4 mt-4 ${style.buttonCreate}`}>{!createProduct ? 'Crear Nuevo Producto' : 'Cerrar Formulario'}</button></a>

        </div>
      </div>
      {createProduct && <div id='formCreateProduct'><FormCreateProduct /></div>}
    </div>

  )
}
