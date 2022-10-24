const axios = require('axios')
/* const { Publication, Product } = require('../db.js') */

class PaymentService {
  async createPayment () {
    const url = `https://api.mercadopago.com/checkout/preferences?access_token=${process.env.ACCESS_TOKEN_MP2}`

    const body = {
      payer_email: 'test_user_35012065@testuser.com',
      items: [
        {
          title: 'vino1',
          description: 'el mejor vino',
          category_id: 'category123',
          picture_url: 'https://img.freepik.com/vector-premium/linda-pequena-abeja-dibujos-animados-volando_188253-3805.jpg?w=740',
          quantity: 1,
          unit_price: 10
        }
      ],
      back_urls: {
        failure: 'http://localhost:3001/feedback',
        pending: 'http://localhost:3001/feedback',
        success: 'http://localhost:3001/feedback'
      }
    }

    const payment = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP2}`
      }
    })
    console.log(payment)
    return payment.data
  }

  async createSubscription () {
    const url = 'https://api.mercadopago.com/preapproval'

    const body = {
      reason: 'Suscripción de ejemplo',
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 10,
        currency_id: 'ARS'
      },
      back_url: 'https://google.com.ar',
      payer_email: 'test_user_35012065@testuser.com'

    }

    const subscription = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP2}`
      }
    })

    return subscription.data
  }
}

module.exports = PaymentService
