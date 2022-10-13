const { Router } = require('express')

// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const router = Router()

// LOAD EACH ROUTES IN A ROUTE
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)

module.exports = router
