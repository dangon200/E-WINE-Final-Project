// import style from './FormCreatePubli.module.css'
import { useFormik } from 'formik'
import { useState } from 'react'
import { schemaFormPubli, validateUrl, schemaUrl } from '../utilities/schemas'

export default function FormCreatePubli () {
  const { values, setFieldValue, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues: { title: '', price: 0, description: '', count: 0, image: [] },
    validationSchema: schemaFormPubli,

    onSubmit: async (values) => {
      try {
        const url = await uplodCloudinary(values.image[0])
        values.image = url
        const response = await fetch('http://localhost:3001/publications', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(values)
        })
        const newPublication = await response.json()
        console.log(newPublication)
        resetForm()
        setSend(true)
        setTimeout(() => { setSend(false) }, 3000)
      } catch (error) {
        console.log(error)
      }
    }
  })
  const [send, setSend] = useState(false)
  const url = 'https://cloudinary.com/console/c-bf289afa75102bfb9d851181ac3904/media_library/folders/c1e8f3b8bc0966db535bfb61e41f1d188a'
  const response = schemaUrl.isValid(url).then(res => console.log(res))
  console.log(response)
  // CLOUDINARY FUNCTION UPLOAD AN IMG
  const uplodCloudinary = async (file) => {
    try {
      const cloudName = 'dfq27ytd2'
      const preset = 'cpnushlf'
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

      const formData = new FormData()
      formData.append('upload_preset', preset)
      formData.append('file', file)

      const send = await fetch(url, {
        method: 'POST',
        body: formData
      })
      const response = await send.json()
      const urlImage = response.secure_url
      if (validateUrl(urlImage)) {
        return urlImage
      } else throw Error('url not valid')
    // END CLOUDINARY
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div>
        <label htmlFor='title' />
        <input
          type='text'
          placeholder='Title'
          name='title'
          id='title'
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor='price' />
        <input
          type='number'
          placeholder='Price'
          name='price'
          id='price'
          min='1'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.price && touched.price && <p>{errors.price}</p>}
      </div>
      <div>
        <label htmlFor='count' />
        <input
          type='number'
          placeholder='Count'
          name='count'
          id='count'
          min='1'
          value={values.count}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.count && touched.count && <p>{errors.count}</p>}
      </div>
      <div>
        <label htmlFor='img'> Img </label>
        <input
          type='file'
          name='image'
          id='img'
          onChange={(e) => {
            const files = e.target.files
            const myFiles = Array.from(files)
            setFieldValue('image', myFiles)
          }}
        />
      </div>
      <div>
        <label htmlFor='description' />
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='4npm'
          placeholder='Description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && touched.description && <p>{errors.description}</p>}
      </div>

      <button type='submit'>Create</button>
      {send && <div>Publication created</div>}
    </form>
  )
}
