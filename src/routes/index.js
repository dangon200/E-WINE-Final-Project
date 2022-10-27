const { Router } = require('express')
// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const checkout = require('./MercadoPago')
const webhooks = require('./webhooksMPRoutes')
const stripeRoutes = require('./stripeRoutes')
const buyRoutes = require('./buyRoutes')
const favoritesRouter = require('./favorites')
const buyItemRoutes = require('./buyItemRoutes')
const questionsRouter = require('./question')
const reviewsRouter = require('./reviews')
const router = Router()

// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/checkout', checkout)
router.use('/webhooks', webhooks)
router.use('/favorites', favoritesRouter)
router.use('/stripe', stripeRoutes)
router.use('/buys', buyRoutes)
router.use('/questions', questionsRouter)
router.use('/reviews', reviewsRouter)
router.use('/buyItems', buyItemRoutes)

module.exports = router
