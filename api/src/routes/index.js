const { Router } = require('express')

// ALL ROUTES
const productRouter = require('./product.js')
const userRouter = require('./users')
const publicationRoutes = require('./publicationRoutes.js')
const favoritesRouter = require('./favorites')
const router = Router()

// LOAD EACH ROUTES IN A ROUTE
router.get('/serverOk', (req, res) => {
  res.status(200).json([])
})
router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/publications', publicationRoutes)
router.use('/favorites', favoritesRouter)

module.exports = router
