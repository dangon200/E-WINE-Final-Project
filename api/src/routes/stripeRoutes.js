const { Router } = require('express')
const router = Router()

// const { Buy } = require('../db')

const { createBuy } = require('../controllers/stripe.js')

router.post('/', (req, res) => {
  try {
    console.log(req.body)
    const newBuy = createBuy(req.body)
    res.status(200).json([newBuy, 'succesful payment'])
  } catch (error) {
    res.status(400).json(error)
    // console.log(error, 'error en ruta stripe')
  }
})

module.exports = router
