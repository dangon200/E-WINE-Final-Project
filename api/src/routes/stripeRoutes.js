const { Router } = require('express')
const router = Router()

// const { Buy } = require('../db')

const { createBuy } = require('../controllers/stripe.js')

router.post('/', async (req, res) => {
  try {
    const newBuy = await createBuy(req.body)
    console.log(newBuy, 'stripe routes respuesta ')
    res.status(200).json(newBuy)
  } catch (error) {
    console.log(`${error.message} error`)
    res.status(400).json(error.message)
  }
})

module.exports = router
