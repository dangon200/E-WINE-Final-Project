const { Router } = require('express')
const { getPublicationsDb, createPublication, getOnePublication, bannedPublication } = require('../controllers')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const publications = await getPublicationsDb()
    res.send(publications)
  } catch (error) {
    res.send(error.message)
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pb = await getOnePublication(id)
    res.send(pb)
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  const { name, price, count, image, description } = req.body

  if (!name) return res.status(400).json('Name is missing!')
  if (!price) return res.status(400).json('Price is missing!')
  if (!count) return res.status(400).json('Count is missing!')
  if (!image) return res.status(400).json('Image is missing!')
  if (!description) return res.status(400).json('Description is missing!')

  try {
    const newPublication = await createPublication(name, price, count, image, description)

    res.send(newPublication)
  } catch (error) {
    res.send(error.message)
  }
}
)

router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pbBanned = await bannedPublication(id)
    res.send(pbBanned)
  } catch (error) {
    res.status(400).send(error.message)
  }
})
module.exports = router
