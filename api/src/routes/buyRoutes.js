const { Router } = require('express')
const { getAllBuy, getBuyById } = require('../controllers/buys.js')
const router = Router()

router.get('/', (req, res) => {
  try {
    const allBuys = getAllBuy()
    res.status(200).json(allBuys)
  } catch (error) {
    res.status(400).json(error)
  }
})
router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    const BuyById = getBuyById(id)
    res.status(200).json(BuyById)
  } catch (error) {
    res.status(400).json(error)
  }
})
module.exports = router
