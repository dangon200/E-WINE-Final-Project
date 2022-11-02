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
      success: 'http://localhost:3000/userPurchased/',
      failure: 'http://localhost:3000',
      pending: 'http://localhost:3000'
    },
    notification_url: 'https://cfa1-2803-9800-9447-8622-2807-430c-5935-6147.sa.ngrok.io/notificacion'
  }
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({ data: response.body.init_point })
    }).catch(function (error) {
      console.log(error)
    })
})

module.exports = server
