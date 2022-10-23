const { Router } = require('express')
const router = Router()

const { Favorite } = require('../db')
const { v4: uuidv4 } = require('uuid')

router.get('/delete/:userId', async (req, res) => {
  const { userId } = req.params
  const { publicationId } = req.query

  try {
    await Favorite.update({ isBanned: true }, {
      where: {
        userId,
        publicationId
      }
    })

    const results = []
    const favorites = await Favorite.findAll({
      where: {
        userId,
        isBanned: false
      }
    })

    favorites.forEach(r => {
      results.push({
        id: r.id,
        publicationId: r.publicationId,
        userId: r.userId
      })
    })
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
)

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const results = []
  try {
    const favorites = await Favorite.findAll({
      where: {
        userId: id,
        isBanned: false
      }
    })

    favorites.forEach(r => {
      results.push({
        id: r.id,
        publicationId: r.publicationId,
        userId: r.userId
      })
    })

    res.status(200).json(results)
  } catch (error) {
    /* res.status(400).json(`Error tratando de obtener los favoritos del usuario con el id: ${id}`) */
    res.status(400).json(error.message)
  }
})

router.post('/', async (req, res) => {
  const { userId, publicationId } = req.body

  try {
    const findFavorite = await Favorite.findOne({
      where: {
        userId,
        publicationId
      }
    })

    if (findFavorite) {
      await Favorite.update({ isBanned: false }, {
        where: {
          userId,
          publicationId
        }
      })
    } else {
      await Favorite.create({
        id: uuidv4(),
        userId,
        publicationId
      })
    }

    const results = []
    const favorites = await Favorite.findAll({
      where: {
        userId,
        isBanned: false
      }
    })

    favorites.forEach(r => {
      results.push({
        id: r.id,
        publicationId: r.publicationId,
        userId: r.userId
      })
    })
    res.status(200).json(results)
  } catch (error) {
    /* res.status(400).json(`Error creando publicacion favorita para el usuario con el id: ${userId}`) */
    res.status(400).json(error.message)
  }
})

module.exports = router
