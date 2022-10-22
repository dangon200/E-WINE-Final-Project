//const { Buy, Publication, BuyItem, User } = require('../db')//
const server = require('express').Router()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
//notification servicio -> getPaymentInfo getPaymentInfo -> tiene la respuesta de la API de Payments PaymentID = 

server.post('/', (req, res) =>{
    //newOrder = req.body.data.id//
    // try {  
    fetch(`https://api.mercadopago.com/v1/payments/50744636571`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN_MP}`
        }
      })
      // .then((data) => {
      //   const ID = data.body.payer.id
      //   const payerEmail = data.body.payer.email
      //   const compraID = data.body.id
      //   const status = data.body.status
      // })
      .then((data) => data.json())
      .then(json => { console.log(json.additional_info.items[1].category_id)
        
    // )
    // }
    // catch (error) {
    //   throw new Error(error, 'Error tratando de obtener orden de compra')
    // }
    res.status(200).send(json)
  })
})


  module.exports = server;