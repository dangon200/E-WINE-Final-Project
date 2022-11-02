const { Router } = require('express')
const router = Router()
const { Publication, User, ReviewBuy, BuyItem, Buy } = require('../db')
const { userBuylvlUp } = require('../controllers/lvlUser')

// CREAR REVIEW
router.post('/', async (req, res) => {
  const { userId, publicationId, puntaje, textRev } = req.body

  const hasBuy = await Buy.findAll(
    {
      where: {
        userId
      }
    }
  )
  const buyIds = hasBuy.map(p => p.id)

  const hasBuyItem = await BuyItem.findAll(
    {
      where: {
        buyId: buyIds,
        publicationId
      }
    }
  )
  const revPuntuada = await ReviewBuy.findOne(
    {
      where: {
        userId,
        publicationId
      }
    }
  )
  try {
    if (revPuntuada) { return res.status(200).json({ result: 'La publicacion ya fue puntuada por este usuario' }) }

    if (hasBuyItem.length >= 1) {
      const AddReview = await ReviewBuy.create(
        {
          stars: puntaje,
          text: textRev,
          userId,
          publicationId
        }
      )
      console.log('Nueva review', AddReview)
      // revisar nivel usuario
      const lvlUp = await userBuylvlUp(userId)
      console.log(lvlUp)
      return res.status(200).json(AddReview)
    } else return res.status(404).json('No se puede puntuar por que no hay compra registrada')
  } catch (error) {
    console.log(error)
  }
})

// CONSTESTA CON EL PUNTAJE GRAL Y LA CANTIDAD
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const PubPunctuated = await ReviewBuy.findAll(
    {
      where: {
        publicationId: id
      }
    }
  )
  const arrStars = PubPunctuated.map(p => p.stars)
  const cantidadRevs = arrStars.length
  const sumaStars = arrStars.reduce((a, b) => a + b, 0)
  const result = sumaStars / arrStars.length
  res.status(200).json({ result, cantidadRevs })
})

// ARRAY CON EL DETALLE DE LOS COMENTARIOS DE LAS REVIEWS (USER,COMENTARIO,PUNTAJE,ID,IMAGE)
router.get('/reviewsDetail/:id', async (req, res) => {
  const { id } = req.params
  try {
    const results = []

    const reviewsDetail = await ReviewBuy.findAll({
      include: [{
        model: Publication
      }, {
        model: User
      }],
      where: {
        publicationId: id
      },
      order: [['createdAt', 'DESC']]
    })

    if (!reviewsDetail.length) return res.status(200).json('No hay comentarios de esta publicación')

    reviewsDetail.forEach(r => {
      results.push({
        id: r.id,
        text: r.text,
        stars: r.stars,
        username: r.user.username,
        createdAt: r.createdAt,
        image: r.user.image
      })
    })
    res.status(201).json(results)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router
