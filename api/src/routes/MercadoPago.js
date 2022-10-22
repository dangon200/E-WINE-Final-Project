//const express = require('express')
//const router = express.Router()
const { Buy, Publication, BuyItem, User } = require('../db')
const server = require('express').Router()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch')


// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
const { getBuyById } = require('../controllers/buys');

//middleware
//app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP
  });

//routes
// TODO back_urls MODIICAR
server.post('/',(req, res) => {
// Crea un objeto de preferencia
let preference = {
 
    items: req.body.map(item => {return {...item, currency_id:'ARS'}}),
    back_urls: {
      "success": "https://e-wine-ashen.vercel.app",
      "failure": "http://www.failure.com",
      "pending": "http://www.pending.com"
    },
    notification_url: "https://webhook.site/5cfc9a1e-13d5-4673-b7a3-d837514d0d46"
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  
    res.status(200).json({data: response.body.init_point});
   
  }).catch(function(error){
    console.log(error);
  });
})



server.get('/feedback', function (req, res) {

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

var payment_data = {
  transaction_amount: Number(req.body.transactionAmount),
  token: req.body.token,
  description: req.body.description,
  installments: Number(req.body.installments),
  payment_method_id: req.body.paymentMethodId,
  issuer_id: req.body.issuer,
  notification_url: "http://locahost:3001/webhooks",
  payer: {
    email: req.body.email,
    identification: {
      type: req.body.docType,
      number: req.body.docNumber
    }
  }
}
mercadopago.payment.save(payment_data)
  .then(function(response) {
    res.status(response.status).json({
      payer: response.body.payer,
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id,
      amount: response.body.transactionAmount,
      description: response.body.description
      });
  })
  .catch(function(error) {
    res.status(response.status).send(error);
  })
})

module.exports = server