// import React, { useState, useEffect } from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

// import CheckoutForm from '../CheckoutForm/CheckoutForm'
// import style from './paymentStripe.module.css'

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe('pk_test_51LulbPIqj2ZSlvPhFc2tZcwLaUNPI6AeDUVQ0suCtRgkZ0TuLXuJesW8TZDo8e5Pb8xnqNAXePovJcu99SR3rWR000zolZnAxO')

// export default function PaymentStripe () {
//   const [clientSecret, setClientSecret] = useState('')

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch('/create-payment-intent', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] })
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret))
//   }, [])

//   const appearance = {
//     theme: 'stripe'
//   }
//   const options = {
//     clientSecret,
//     appearance
//   }

//   return (
//     <div className={style.App}>
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   )
// }
