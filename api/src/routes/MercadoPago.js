//const express = require('express')
//const router = express.Router()
const server = require('express').Router()
const PaymentController = require('../controllers/paymentControllers')
const PaymentServices = require('../services/paymentServices')
const PaymentInstance = new PaymentController(new PaymentServices())


server.post ('/carrito', function(req, res, next){
    let carrito = [];
  });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
const { setRandomFallback } = require('bcryptjs');

//middleware

app.use(bodyParser.urlencoded({ extended: false }))

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
server.post('/subscription', function(req, res, next){
  PaymentInstance.getSubscriptionLink(req, res);
});

//notification servicio -> getPaymentInfo getPaymentInfo -> tiene la respuesta de la API de Payments PaymentID = 
server.get('/merchantOrder', function (req, res) {
  const newOrder = req.body.data.id
  fetch(`https://api.mercadopago.com/v1/payments/${newOrder}`, {
      method: 'GET',
      headers:{
       "Authorization": `Bearer ${process.env.ACCESS_TOKEN_MP}`,
      },
      credentials: 'include'
    }
      .then((res) => res.status(200).json(data))
      .then((data) => {
        const payerID = data.payer.id
        const payerEmail = data.payer.email
        const compraID = data.id
        const status = data.status
      })
  )
  }) 

server.post('/feedback', function (req, res) {

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

var payment_data = {
  transaction_amount: Number(req.body.transactionAmount),
  token: req.body.token,
  description: req.body.description,
  installments: Number(req.body.installments),
  payment_method_id: req.body.paymentMethodId,
  issuer_id: req.body.issuer,
  notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
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
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
        });
  })
  .catch(function(error) {
    res.status(response.status).send(error);
  })
})

module.exports = server;