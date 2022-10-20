const { Router } = require('express')
const router = Router()
// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const payment = require('./MercadoPago')
const feedback = require('./MercadoPago')
// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/payment', payment)
router.use('/feedback', feedback)

module.exports = router
