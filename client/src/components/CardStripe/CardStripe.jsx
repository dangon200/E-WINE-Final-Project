import React, { useState, useEffect } from 'react' // eslint-disable-line
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import 'bootswatch/dist/lux/bootstrap.min.css'

const stripePromise = loadStripe('pk_test_51LulbPIqj2ZSlvPhFc2tZcwLaUNPI6AeDUVQ0suCtRgkZ0TuLXuJesW8TZDo8e5Pb8xnqNAXePovJcu99SR3rWR000zolZnAxO')

const CheckoutForm = () => {
  const stripe = useStripe()
  const elemets = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({ // eslint-disable-line
      type: 'card',
      card: elemets.getElement(CardElement)
    })
    if (!error) {
      console.log(paymentMethod)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <img src='https://imgs.search.brave.com/Y5KS64aNvBNg8mwK5G1ks_1XK8_Fnorl1iMGPkBmSu4/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/MTlpVHR6Qzk0ZHBM/elZZdXFqMzZnSGFF/NyZwaWQ9QXBp' alt='vino' className='img-fluid' />
      <div className='form-group'>
        <CardElement className='form-control' />
      </div>
      <button className='btn btn-success'>
        Comprar
      </button>
    </form>
  )
}

export default function CardStripe () {
  return (
    <Elements stripe={stripePromise}>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  )
}
