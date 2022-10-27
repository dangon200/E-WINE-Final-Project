const { Router } = require('express')
const router = Router()

const { Review, Product, User } = require('../db')
const { v4: uuidv4 } = require('uuid')

router.get('/:productId', async (req, res) => {
  const { productId } = req.params

  try {
    const results = []

    const reviews = await Review.findAll({
      include: [{
        model: Product
      }, {
        model: User
      }],
      where: {
        productId
      },
      order: [['createdAt', 'DESC']]
    })

    if (!reviews.length) return res.status(200).json('El product no tiene reviews!')

    reviews.forEach(r => {
      results.push({
        id: r.id,
        text: r.text,
        answer: r.answer,
        username: r.user.username
      })
    })

    res.status(201).json(results)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.post('/', async (req, res) => {
  const { userId, productId, text } = req.body

  try {
    const results = []

    await Review.create({
      id: uuidv4(),
      userId,
      productId,
      text
    })

    const reviews = await Review.findAll({
      include: [{
        model: Product
      }, {
        model: User
      }],
      where: {
        productId
      },
      order: [['createdAt', 'DESC']]
    })

    reviews.forEach(r => {
      results.push({
        id: r.id,
        text: r.text,
        username: r.user.username
      })
    })

    res.status(201).json(results)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router
