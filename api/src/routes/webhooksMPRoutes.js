const server = require('express').Router()
const { createBuy } = require('../controllers/webhooksMP')

server.post('/', (req, res) => {
  const id = req.body.data.id
  try {
    const newBuy = createBuy(id)
    if (newBuy) {
      res.status(200).send('Pago Realizado')
    }
  } catch (error) {
    throw console.error(error)
  }
})
module.exports = server
