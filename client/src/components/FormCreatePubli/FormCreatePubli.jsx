// import style from './FormCreatePubli.module.css'
import { Formik } from 'formik'

export default function FormCreatePubli () {
  return (
    <>
      <Formik
        initialValues={{ price: '', description: '', count: '', image: '' }}
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
        onSubmit={(values) => {
          // console.log(values)
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit}>
              {console.log(values.image)}
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
                  onChange={handleChange}
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
