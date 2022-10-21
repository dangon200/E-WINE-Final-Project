const { Router } = require('express')
const router = Router()
// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const checkout = require('./MercadoPago')
const feedback = require('./MercadoPago')
// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/checkout', checkout)
router.use('/feedback', feedback)

module.exports = router
