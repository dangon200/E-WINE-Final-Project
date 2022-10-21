const { Router } = require('express')

// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const stripeRoutes = require('./stripeRoutes')
const buyRoutes = require('./buyRoutes')
const router = Router()

// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/stripe', stripeRoutes)
router.use('/buys', buyRoutes)

module.exports = router
