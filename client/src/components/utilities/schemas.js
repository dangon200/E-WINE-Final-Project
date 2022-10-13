import * as Yup from 'yup'

export const schemaFormPubli = Yup.object().shape({
  title: Yup.string().required('Required').min(3, 'Min 3 characters'),
  price: Yup.number().required('Required').min(1, 'Min 1').positive('Positive number'),
  description: Yup.string().required('Required').min(10, 'Min 10 characters').max(150, 'Max 150 characters'),
  count: Yup.number().required('Required').min(1, 'Min 1').positive('Positive number')
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
