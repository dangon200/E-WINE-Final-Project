// import style from './FormCreatePubli.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

export default function FormCreatePubli () {
  const [send, setSend] = useState(false)
  // FUNCTION VALIDATE URL IMAGE
  const validateUrl = (value) => {
    if (/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value)) {
      return true
    } else return false
  }
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
    <>
      <Formik
        initialValues={{ name: '', price: 0, description: '', count: 0, image: [] }}
        validate={values => {
          const errors = {}
          // title validations
          if (!values.name) {
            errors.name = 'Required'
          } else if (values.name.length < 10) {
            errors.name = 'Must be 10 characters or more'
          } else if (values.name.length > 150) {
            errors.name = 'Must be 150 characters or less'
          }
          // price validation
          if (!values.price) {
            errors.price = 'Required'
          } else if (values.price < 0) {
            errors.price = 'Min value is 1'
          } else if (typeof parseInt(values.price) !== 'number') {
            errors.price = 'Must be a number'
          }
          // count validation
          if (!values.count) {
            errors.count = 'Min 1 count '
          } else if (typeof parseInt(values.count) !== 'number') {
            errors.price = 'Must be a number'
          }
          // description validation
          if (!values.description) {
            errors.description = 'Required'
          } else if (values.description.length < 10) {
            errors.description = 'Min 10 characters'
          }
          // image validation
          if (!values.image) {
            errors.image = 'Min 1 image'
          }
          return errors
        }}
        onSubmit={async (values, { resetForm }) => {
          // API POST PUBLICATION
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
          // END API POST PUBLICATION
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <div>
                <label htmlFor='title' />
                <Field
                  type='text'
                  placeholder='Title'
                  name='name'
                  id='title'
                />
                <ErrorMessage name='price' component='div' />
              </div>
              <div>
                <label htmlFor='price' />
                <Field
                  type='number'
                  placeholder='Price'
                  name='price'
                  id='price'
                  min='1'
                />
                <ErrorMessage name='price' component='div' />
              </div>
              <div>
                <label htmlFor='count' />
                <Field
                  type='number'
                  placeholder='Count'
                  name='count'
                  id='count'
                  min='1'
                />
                <ErrorMessage name='count' component='div' />
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
                <Field
                  as='textarea'
                  name='description'
                  id='description'
                  cols='30'
                  rows='4npm'
                  placeholder='Description'
                />
                <ErrorMessage name='description' component='div' />
              </div>

              <button type='submit'>Create</button>
              {send && <div>Publication created</div>}
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
