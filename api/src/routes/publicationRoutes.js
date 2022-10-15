const { Router } = require('express')
const {
  getPublicationsDb,
  createPublication,
  getOnePublication,
  bannedPublication,
  orderPublicationsMorePrice,
  orderPublicationsLessPrice,
  orderPublicationsAtoZ,
  orderPublicationsZtoA,
  getPublicationsByName
} = require('../controllers')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query

  try {
    if (name) {
      const publications = await getPublicationsByName(name)
      if (!publications.length) return res.status(200).json('No hay publicaciones de productos con ese nombre!')

      return res.status(200).json(publications)
    }

    const publications = await getPublicationsDb()

    if (!publications.length) {
      return res
        .status(200)
        .json('No hay publicaciones guardadas en la Base de Datos!')
    }

    return res.status(200).json(publications)
  } catch (error) {
    res.status(404).json(error.message)
  }
})

router.get('/filter', async (req, res) => {
  const { type, varietal, origin, opt } = req.query

  console.log(opt)

  try {
    let publications = await getPublicationsDb()

    if (type) {
      publications = publications.filter(publication => publication.type === type)
    }

    if (varietal) {
      publications = publications.filter(publication => publication.varietal === varietal)
    }

    if (origin) {
      publications = publications.filter(publication => publication.origin === origin)
    }

    if (!publications.length) return res.status(200).json('No hay publicaciones con los filtros seleccionados!')

    if (opt === 'az') {
      publications = publications.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        return 0
      })
    } else if (opt === 'za') {
      publications = publications.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
        return 0
      })
    } else if (opt === 'more') {
      publications = publications.sort((a, b) => {
        if (a.price < b.price) return 1
        if (a.price > b.price) return -1
        return 0
      })
    } else if (opt === 'less') {
      publications = publications.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        return 0
      })
    }

    res.status(200).json(publications)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pb = await getOnePublication(id)

    if (!pb) {
      return res
        .status(404)
        .json(`Publicacion con el ID: ${id} no encontrada!`)
    }

    res.status(200).json(pb)
  } catch (error) {
    res.status(404).json(error.message)
  }
})

router.get('/order/:opt', async (req, res) => {
  try {
    const { opt } = req.params

    let results = []

    if (opt === 'more') {
      results = await orderPublicationsMorePrice()
    } else if (opt === 'less') {
      results = await orderPublicationsLessPrice()
    } else if (opt === 'az') {
      results = await orderPublicationsAtoZ()
    } else if (opt === 'za') {
      results = await orderPublicationsZtoA()
    } else {
      return res.status(404).json('No existe ningun filtro con esas opciones!')
    }

    res.status(200).json(results)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.post('/', async (req, res) => {
  const { productId, title, price, count, image, description } = req.body

  if (!title) return res.status(400).json('Falta la propiedad titulo!')
  if (!price) return res.status(400).json('Falta la propiedad precio!')
  if (!count) return res.status(400).json('Falta la propiedad stock!')
  if (!image) return res.status(400).json('Falta la imagen de la publicacion!')
  if (!description) { return res.status(400).json('Falta la propiedad descripcion!') }

  try {
    const newPublication = await createPublication(
      productId,
      title,
      price,
      count,
      image,
      description
    )

    res.status(201).json(newPublication)
  } catch (error) {
    res.status(404).json(error.message)
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { banned } = req.query

  try {
    const pbBanned = await bannedPublication(id, banned)
    return res.status(200).json(pbBanned)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
module.exports = router
