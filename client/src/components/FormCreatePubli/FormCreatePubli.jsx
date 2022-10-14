// import style from './formCreatePubli.module.css'
// import { useFormik } from 'formik'
// import { useState } from 'react'
// import { schemaFormPubli, validateUrl, schemaUrl } from '../utilities/schemas'

// export default function FormCreatePubli () {
//   const dispatch = useDispatch()
//   const products = useSelector(state => state.products)
//   if (!products.length) dispatch(getProducts())

//   const { values, setFieldValue, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
//     initialValues: { productId: '', title: '', price: 0, description: '', count: 0, image: [] },
//     validationSchema: schemaFormPubli,

//     onSubmit: async (values) => {
//       try {
//         const url = await uplodCloudinary(values.image[0])
//         values.image = url
//         dispatch(postPublication(values))
//         resetForm()
//         setSend(true)
//         setTimeout(() => { setSend(false) }, 3000)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   })
//   const [send, setSend] = useState(false)

//   return (
//     <section className={style.section}>

//       <form onSubmit={handleSubmit} autoComplete='off' className={style.form}>
//         <div className='mb-3'>
//           <label htmlFor='title' className='form-label'>Title</label>
//           <input
//             className='form-control'
//             type='text'
//             placeholder='Title'
//             name='title'
//             id='title'
//             value={values.title}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.name && touched.name && <p className={style.p}>{errors.name}</p>}
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='price' className='form-label'>Price</label>
//           <input
//             className='form-control'
//             type='number'
//             placeholder='Price'
//             name='price'
//             id='price'
//             min='1'
//             value={values.price}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.price && touched.price && <p className={style.p}>{errors.price}</p>}
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='count' className='form-label'>Count</label>
//           <input
//             className='form-control'
//             type='number'
//             placeholder='Count'
//             name='count'
//             id='count'
//             min='1'
//             value={values.count}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.count && touched.count && <p className={style.p}>{errors.count}</p>}
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='img' className='form-label'> Img </label>
//           <input
//             className='form-control'
//             type='file'
//             name='image'
//             id='img'
//             onChange={(e) => {
//               const files = e.target.files
//               const myFiles = Array.from(files)
//               setFieldValue('image', myFiles)
//             }}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor='description' className='form-label mb-3'>Description</label>
//           <textarea
//             className='form-control'
//             name='description'
//             id='description'
//             cols='30'
//             rows='4npm'
//             placeholder='Description'
//             value={values.description}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.description && touched.description && <p className={style.p}>{errors.description}</p>}

//         </div>
//         <div>
//           <select name='productId' onChange={handleChange} className={style.select}>
//             <option value=''>Select a product</option>
//             {products && products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
//           </select>
//         </div>

//         <button type='submit'>Create</button>
//         {send && <div>Publication created</div>}
//       </form>
//     </section>
//   )
// }
