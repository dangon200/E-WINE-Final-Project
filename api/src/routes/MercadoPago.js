//const express = require('express')
//const router = express.Router()
const server = require('express').Router()
const PaymentController = require('../controllers/paymentControllers')
const PaymentServices = require('../services/paymentServices')
const PaymentInstance = new PaymentController(new PaymentServices())


server.post ('/carrito', function(req, res, next){
    let carrito = [];
  });
//server.post('/payment', function(req, res, next){
//    PaymentInstance.getPaymentLink(req, res);
//  });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

//middleware

app.use(bodyParser.urlencoded({ extended: false }))

// Agrega credenciales
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP
  });

//routes
server.post('/checkout', (req, res) => {
// Crea un objeto de preferencia

let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: req.body.count,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  
    res.redirect(response.body.init_point);
   
  }).catch(function(error){
    console.log(error);
  });
});


server.post('/subscription', function(req, res, next){
    PaymentInstance.getSubscriptionLink(req, res);
  });

server.get('/feedback', function (req, res) {
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

module.exports = server;