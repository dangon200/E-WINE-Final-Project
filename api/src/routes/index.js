const { Router } = require('express')

//ALL ROUTES
const productRouter = require('./product.js')

const router = Router()

//LOAD EACH ROUTES IN A ROUTE
router.use('/products', productRouter)

module.exports = router