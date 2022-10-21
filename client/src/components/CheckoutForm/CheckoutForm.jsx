import React, { useState, useEffect } from 'react' // eslint-disable-line
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import 'bootswatch/dist/lux/bootstrap.min.css'

import { useDispatch, useSelector } from 'react-redux'
import { postStripe } from '../../store/actions/actions'

export default function CheckoutForm (props) {
  const stripe = useStripe()
  const elemets = useElements()
  const dispatch = useDispatch()
  const carrito = useSelector(state => state.carrito)

  const { totalAmount } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
      const { error, paymentMethod } = await stripe.createPaymentMethod({ // eslint-disable-line
      type: 'card',
      card: elemets.getElement(CardElement)
    })
    console.log(paymentMethod)
    if (!error) {
      const { id } = paymentMethod

      dispatch(postStripe(id, totalAmount * 100, carrito))
    }
  }
  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <img src='https://imgs.search.brave.com/Y5KS64aNvBNg8mwK5G1ks_1XK8_Fnorl1iMGPkBmSu4/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MTlpVHR6Qzk0ZHBM/elZZdXFqMzZnSGFF/NyZwaWQ9QXBp' alt='vino' className='img-fluid' />
      <h4 className='text-center my-2'>$ {totalAmount}</h4>
      <div className='form-group'>
        <CardElement className='form-control' />
      </div>
      <button className='btn btn-success'>
        Comprar
      </button>
    </form>
  )
}
