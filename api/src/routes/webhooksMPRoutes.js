const server = require('express').Router()
const { createBuy } = require('../controllers/webhooksMP')

server.post('/', (req, res, next) => {
  const id = req.body.data.id
  const payment = req.body.action
  if (id !== undefined && payment === 'payment.created') {
    try {
      const newBuy = createBuy(id)
      if (newBuy) {
        res.status(200).send('Pago Realizado')
      }
    } catch (error) {
      throw console.error(error)
    }
  } else next()
})
module.exports = server
