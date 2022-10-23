// const express = require('express')
// const router = express.Router()
const server = require('express').Router()

// SDK de Mercado Pago
const mercadopago = require('mercadopago')

// middleware
// app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN_MP
})

// routes
// TODO back_urls MODIICAR
server.post('/', (req, res) => {
// Crea un objeto de preferencia
  const preference = {

    items: req.body.map(item => { return { ...item, currency_id: 'ARS' } }),
    back_urls: {
      success: 'https://e-wine-ashen.vercel.app',
      failure: 'http://www.failure.com',
      pending: 'http://www.pending.com'
    },
    notification_url: 'https://webhook.site/5cfc9a1e-13d5-4673-b7a3-d837514d0d46'
  }

  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({ data: response.body.init_point })
    }).catch(function (error) {
      console.log(error)
    })
})

module.exports = server
