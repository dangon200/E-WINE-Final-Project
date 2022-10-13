// import style from './FormCreatePubli.module.css'
import { Formik } from 'formik'

export default function FormCreatePubli () {
  // FUNCTION VALIDATE URL IMAGE
  const validateUrl = (value) => {
    if (/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value)) {
      return true
    } else return false
  }
  // CLOUDINARY FUNCTION UPLOAD AN IMG
  const uplodCloudinary = async (file) => {
    try {
      const cloudName = 'dxkbtlnqc'
      const preset = 'HenryFinal'
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
        initialValues={{ name: 'vino', price: 2, description: 'Buen Vinooo', count: 5, image: [] }}
        validate={values => {
          const errors = {}
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
          } catch (error) {
            console.log(error)
          }
          // END API POST PUBLICATION
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='price' />
                <input
                  type='number'
                  placeholder='Price'
                  name='price'
                  id='price'
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min='1'
                />
                {touched.price && errors.price && <div>{errors.price}</div>}
              </div>
              <div>
                <label htmlFor='count' />
                <input
                  type='number'
                  placeholder='Count'
                  name='count'
                  id='count'
                  value={values.count}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min='1'
                />
                {touched.count && errors.count && <div>{errors.count}</div>}
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
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor='description' />
                <textarea
                  name='description'
                  id='description'
                  cols='30'
                  rows='4npm'
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && <div>{errors.description}</div>}
              </div>

              <button type='submit' disabled={Object.keys(errors).length && true}>Create</button>
            </form>
          )
        }}
      </Formik>
    </>
  )
}
