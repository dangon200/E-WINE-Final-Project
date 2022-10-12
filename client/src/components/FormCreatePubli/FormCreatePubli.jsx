// import style from './FormCreatePubli.module.css'
import { Formik } from 'formik'

export default function FormCreatePubli () {
  return (
    <>
      <Formik
        initialValues={{ price: '', description: '', count: '', image: '' }}
        validate={values => {
          const errors = {}
          if (!values.price) {
            errors.price = 'Required'
          } else if (values.price.length < 3) {
            errors.price = 'Must be 15 characters or less'
          }
          return errors
        }}
        onSubmit={(values) => {
          // console.log(values)
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit}>
              {console.log(errors)}
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
                />
                {errors.price && <div>{errors.price}</div>}
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
                />
                {errors.count && <div>{errors.count}</div>}
              </div>
              <div>
                <label htmlFor='img'> Img </label>
                <input
                  type='file'
                  name='img'
                  id='img'
                  value={values.image}
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
                {errors.description && <div>{errors.description}</div>}
              </div>

              <button type='submit'>Create</button>
            </form>
          )
        }}
      </Formik>

    </>
  )
}
