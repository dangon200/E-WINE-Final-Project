const { Product } = require('../db')
const server = require('express').Router()
const { isAdmin } = require('../controllers/helper')
const productController = require('../controllers/products')

server.get('/', async (req, res) => {
  try {
    const productsFromDb = await productController.getAllProducts()

    if (!productsFromDb.length) return res.status(404).json('No hay productos guardados en la Base de Datos!')

    return res.status(200).json(productsFromDb)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
// Busca el producto por ID y devulve el Producto
server.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const productById = await productController.getProductById(id)

    if (!productById) return res.status(404).json(`Producto con el ID: ${id} no encontrado!`)

    return res.status(200).json(productById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
// crear producto
server.post('/', async (req, res) => {
  const { name, type, varietalId, origin, img, cellar } = req.body
  if (!name) return res.status(400).json('Falta parametro nombre!')
  if (!type) return res.status(400).json('Falta parametro tipo!')
  if (!varietalId) return res.status(400).json('Falta parametro varietal!')
  if (!origin) return res.status(400).json('Falta parametro origin!')
  if (!img) return res.status(400).json('Falta parametro img!')
  if (!cellar) return res.status(400).json('Falta parametro cellar!')

  try {
    const productExist = await Product.findOne({
      where: {
        name
      }
    })

    if (productExist) return res.status(404).json('Ya existe un vino con ese nombre. Prueba con uno nuevo!')

    const productCreated = await productController.createProduct(
      name, type, varietalId, origin, img, cellar
    )

    res.status(201).json(productCreated)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

// Elimina el Producto en base a su ID

server.delete('/:id', isAdmin, (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => {
      if (!product) return res.status(404).send('Id no valido')
      product.destroy().then(() => {
        res.status(200).json(product)
      })
    })
    .catch((err) => res.status(400).send(err))
})

// Actualiza el Producto en base a su ID - Le remueve todas sus anteriores categorias y le setea las nuevas
server.put('/:id', (req, res) => {
  const { name, type, varietal, origin, img, cellar, categories } = req.body

  if (
    !name ||
        !type ||
        !varietal ||
        !origin ||
        !img ||
        !cellar ||
        categories.length === 0
  ) {
    res.status(400).send('Debe enviar los campos requeridos')
    return
  }

  Product.findByPk(req.params.id)
    .then((product) => {
      if (!product) return res.status(404).send('Id no valido')
      product.name = req.body.name || product.name
      product.type = req.body.type || product.type
      product.varietal = req.body.varietal || product.varietal
      product.origin = req.body.origin || product.origin
      product.img = req.body.img || product.img
      product.cellar = req.body.cellar || product.cellar
      res.status(200).send(product)
    })
    .catch((err) => res.status(500).send(err))
})

module.exports = server
