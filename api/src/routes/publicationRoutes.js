const { Router } = require('express')
const { getPublicationsDb, createPublication, getOnePublication, bannedPublication } = require('../controllers')
// const{}=require()
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
  try {
    const newPublication = await createPublication(req.body)

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
