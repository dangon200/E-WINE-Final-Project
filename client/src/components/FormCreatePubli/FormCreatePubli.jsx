// import style from './FormCreatePubli.module.css'
import { Formik } from 'formik'

export default function FormCreatePubli () {
  return (
    <>
      <Formik
        initialValues={{ price: '', description: '', count: '', image: [] }}
        validate={values => {
          const errors = {}
          // price validation
          // if (!values.price) {
          //   errors.price = 'Required'
          // } else if (values.price < 0) {
          //   errors.price = 'Min value is 1'
          // } else if (typeof parseInt(values.price) !== 'number') {
          //   errors.price = 'Must be a number'
          // }
          // // count validation
          // if (!values.count) {
          //   errors.count = 'Min 1 count '
          // } else if (typeof parseInt(values.count) !== 'number') {
          //   errors.price = 'Must be a number'
          // }
          // // description validation
          // if (!values.description) {
          //   errors.description = 'Required'
          // } else if (values.description.length < 10) {
          //   errors.description = 'Min 10 characters'
          // }
          // // image validation
          // if (!values.image) {
          //   errors.image = 'Min 1 image'
          // }
          return errors
        }}
        onSubmit={(values) => {
          // console.log(values)
          const cloudName = 'dxkbtlnqc'
          const preset = 'HenryFinal'
          const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

          const formData = new FormData()
          formData.append('upload_preset', preset)
          formData.append('file', values.image[0])
          try {
            fetch(url, {
              method: 'POST',
              body: formData
            })
              .then(res => res.json())
              .then(res => console.log(res.secure_url))
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                {console.log(values)}
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
