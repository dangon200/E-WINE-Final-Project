const { Router } = require('express')
const router = Router()
// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const checkout = require('./MercadoPago')
const webhooks = require('../controllers/webhooksMP')
const stripeRoutes = require('./stripeRoutes')
const buyRoutes = require('./buyRoutes')

// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/checkout', checkout)
router.use('/webhooks', webhooks)
router.use('/stripe', stripeRoutes)
router.use('/buys', buyRoutes)

module.exports = router
