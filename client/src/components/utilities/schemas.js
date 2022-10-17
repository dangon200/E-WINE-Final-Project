import * as Yup from 'yup'
import { types, provinces, varietales } from './data'

const startWichLetter = /^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][a-zA-Z0-9_]+\s*/gi

export const schemaFormPubli = Yup.object().shape({
  title: Yup.string().required('Es Requerido').matches(startWichLetter, 'Debe comenzar con una letra').min(3, 'Min 3 caracteres'),
  price: Yup.number('Solo números').required('Es Requerido').min(1, 'Min 1').positive('Positive number').max(500000, 'Max $500.000'),
  description: Yup.string().required('Es Requerido').min(10, 'Min 10 caracteres').max(150, 'Max 150 caracteres'),
  count: Yup.number().required('Es Requerido').min(1, 'Min 1').positive('Min 1').max(10000, 'Max 10.000'),
  productId: Yup.string().required('Por favor seleccione un producto').uuid(),
  image: Yup.mixed().required('Es Requerido')
    .test('fileSize', 'La imagen es requerida', value => value && value.size >= 1000)
    .test('fileSize', 'Max 3 MB ', value => value && value.size <= 3000000)
    .test('fileFormat', 'Solo jpg, jpge, gif, png', value => value && ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(value.type))
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
  name: Yup.string().required('Es Requerido').matches(startWichLetter, 'Debe comenzar con una letra').min(3, 'Min 3 caracteres').max(50, 'Max 50 caracteres'),
  type: Yup.string().required('Es Requerido').oneOf(types),
  varietal: Yup.string().required('Es Requerido').oneOf(varietales),
  origin: Yup.string().required('Es Requerido').oneOf(provinces),
  cellar: Yup.string().required('Es Requerido').min(3, 'Min 3 caracteres').max(50, 'Max 50 caracteres'),
  img: Yup.mixed().required('Es Requerido')
    .test('fileSize', 'La imagen es requerida', value => value && value.size >= 1000)
    .test('fileSize', 'Max 3 MB ', value => value && value.size <= 3000000)
    .test('fileFormat', 'Solo jpg, jpge, gif, png', value => value && ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(value.type))
})
