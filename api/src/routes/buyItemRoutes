const { Router } = require('express')
const { getAllBuyItemsOfBuy, getAllBuyItems } = require('../controllers/buyItems.js')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const allBuyItems = await getAllBuyItems()
    res.status(200).json(allBuyItems)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/buy/:id', async (req, res) => {
  const { id } = req.params
  try {
    const allBuyItemsOfBuy = await getAllBuyItemsOfBuy(id)
    console.log('llegue', allBuyItemsOfBuy)
    res.status(200).json(allBuyItemsOfBuy)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     const BuyById = await getBuyById(id)
//     res.status(200).json(BuyById)
//   } catch (error) {
//     res.status(400).json(error.message)
//   }
// })
// router.get('/user/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     const BuyById = await getBuysByUser(id)
//     res.status(200).json(BuyById)
//   } catch (error) {
//     res.status(400).json(error.message)
//   }
// })
// router.get('/publication/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     const BuyById = await getBuysByPublication(id)
//     res.status(200).json(BuyById)
//   } catch (error) {
//     res.status(400).json(error.message)
//   }
// })
module.exports = router
