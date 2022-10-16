import * as Yup from 'yup'
import { types, provinces, varietales } from './data'

export const schemaFormPubli = Yup.object().shape({
  title: Yup.string().required('Required').min(3, 'Min 3 characters'),
  price: Yup.number('Only numbers').required('Required').min(1, 'Min 1').positive('Positive number').max(500000, 'Max $500.000'),
  description: Yup.string().required('Required').min(10, 'Min 10 characters').max(150, 'Max 150 characters'),
  count: Yup.number().required('Required').min(1, 'Min 1').positive('Positive number').max(10000, 'Max 10.000'),
  productId: Yup.string().required('Please select a Product').uuid(),
  image: Yup.mixed().required('Required')
    .test('fileSize', 'a image is Required ', value => value && value.size <= 1000000)
    .test('fileFormat', 'Unsupported Format', value => value && ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(value.type))
})

// FUNCTION VALIDATE URL IMAGE
export const validateUrl = (value) => {
  if (/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value)) {
    return true
  } else return false
}

export const schemaUrl = Yup.object().shape({
  url: Yup.string().required().matches(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi, 'Invalid url')
})

// CLOUDINARY FUNCTION UPLOAD AN IMG
export const uplodCloudinary = async (file) => {
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

// name, type, varietal, origin, img, cellar

export const schemaFormProduct = Yup.object().shape({
  name: Yup.string().required('Required').min(3, 'Min 3 characters').max(50, 'Max 50 characters'),
  type: Yup.string().required('Required').oneOf(types),
  varietal: Yup.string().required('Required').oneOf(varietales),
  origin: Yup.string().required('Required').oneOf(provinces),
  cellar: Yup.string().required('Required').min(3, 'Min 3 characters').max(50, 'Max 50 characters'),
  img: Yup.mixed().required('Required')
    .test('fileSize', 'a image is Required ', value => value && value.size >= 1000)
    .test('fileSize', 'Max 3 MB ', value => value && value.size <= 3000000)
    .test('fileFormat', 'Unsupported Format', value => value && ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(value.type))
})
