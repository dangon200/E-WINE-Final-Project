// import React from "react";
// import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { varietals, provinces, types } from '../utilities/data'
import { uplodCloudinary } from '../utilities/schemas'
// import { postProduct } from '../../store/actions/actions'

// name, type, varietal, origin, img, cellar

export default function FormCreateProduct () {
  // const dispatch = useDispatch() //
  console.log(uplodCloudinary)
  const { values, handleChange, handleBlur, setFieldValue } = useFormik({
    initialValues: { name: '', type: '', varietal: '', origin: '', img: '', cellar: '' }
  })
  return (
    <>
      {console.log(values)}
      <section className='container'>
        <h2>Create a Product</h2>
        <form className='card d-flex justify-content-center mx-auto my-3 p-5'>

          <div className='form-group col-md-12'>
            <label htmlFor='name' className='fs-3'>Name <span>*</span></label>
            <input
              type='text'
              placeholder='Name'
              name='name'
              id='name'
              className='form-control'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='type' className='fs-3'>Type<span>*</span></label>
            <select
              name='type'
              id='type'
              className='form-select mb-3'
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Select a type</option>
              {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div className='form-group col-md-12 '>
            <label htmlFor='varietal' className='fs-3'>Varietal<span>*</span></label>
            <select
              name='varietal'
              id='varietal'
              className='form-select mb-3'
              value={values.varietal}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Select Varietal</option>
              {varietals.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>

          <div className='form-group col-md-12 '>
            <label htmlFor='origin' className='fs-3'>Province<span>*</span></label>
            <select
              name='origin'
              id='origin'
              className='form-select mb-3'
              value={values.origin}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Select Origin</option>
              {provinces.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div className='form-group col-md-12'>
            <label htmlFor='img' className='fs-3'>Image<span>*</span> </label>
            <input
              type='file'
              name='img'
              onBlur={handleBlur}
              id='img'
              onChange={(e) => {
                setFieldValue('img', e.target.files[0])
              }}
            />
          </div>

        </form>
      </section>
    </>
  )
}
