var express = require('express');
const {Product } = require('../db');
const server = require('express').Router()
const { isAdmin } = require('../controllers/helper')


server.get('/', async (req, res) => {  
  try{
  const products = await Product.findAll()
  res.status(200).send(products)
  }
  catch {
    res.status(400).send('NO ENCUENTRA PRODUCTOS')
  }
})

// Busca el producto por ID y devulve el Producto
server.get('/:id', (req, res) => {
    Product.findOne({ where: { id: req.params.id } })
      .then((product) => {
        if (!product) return res.status(404).send('Id no válido')
        res.status(200).json(product)
      })
      .catch((err) => res.status(400).send(err))
  })
// crear producto 
server.post('/', (req, res) => {
    const { name, type, varietal,origin, img, cellar } = req.body
  
    if (
      !name ||
      !type ||
      !varietal ||
      !origin ||
      !img ||
      !cellar 
    )
      {
      res.status(400).send('Debe enviar los campos requeridos')
      return
    }
  
    Product.create({

        name,
        type,
        varietal,
        origin,
        img,
        cellar,
        
    })
      .then((product) => {

        res.status(200).send(product)
      })
      .catch((err) => res.status(400).send(err))
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
    const { name, type, varietal,origin, img, cellar, categories } = req.body
  
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
        product.type = req.body.type|| product.type
        product.varietal = req.body.varietal || product.varietal
        product.origin = req.body.origin|| product.origin
        product.img = req.body.img || product.img
        product.cellar = req.body.cellar || product.cellar
        res.status(200).send(product)
      })
      .catch((err) => res.status(500).send(err))
  })

  module.exports = server