const { Router } = require('express')
const { getAllBuy, getBuyById, getBuysByUser, getBuysByPublication } = require('../controllers/buys.js')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const allBuys = await getAllBuy()
    console.log('llegue', allBuys)
    res.status(200).json(allBuys)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const BuyById = await getBuyById(id)
    res.status(200).json(BuyById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
router.get('/user/:id', async (req, res) => {
  const { id } = req.params
  try {
    const BuyById = await getBuysByUser(id)
    res.status(200).json(BuyById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
router.get('/publication/:id', async (req, res) => {
  const { id } = req.params
  try {
    const BuyById = await getBuysByPublication(id)
    res.status(200).json(BuyById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
module.exports = router
