const { Router } = require('express')
const router = Router()

const { User } = require('../db')

const userController = require('../controllers/users')

router.get('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const userEmail = await User.findOne({ where: { email } })

    if (!userEmail) return res.status(404).json('Email no encontrado!')
    if (userEmail.password !== password) return res.status(404).json('Password es incorrecto')

    const userById = await userController.getUserById(userEmail.id)
    res.status(200).json(userById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const userById = await userController.getUserById(id)

    if (!userById) {
      return res.status(404).json(`Usuario con ID: ${id} no encontrado!`)
    }
    res.status(200).json(userById)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/banned/true', async (req, res) => {
  try {
    const usersFromDb = await userController.getAllUsersBanned()

    if (!usersFromDb.length) {
      return res.status(404).json('No hay usuarios guardados en la Base de Datos!')
    }

    return res.status(200).json(usersFromDb)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/banned/false', async (req, res) => {
  try {
    const usersFromDb = await userController.getAllUsersNotBanned()

    if (!usersFromDb.length) {
      return res.status(404).json('No hay usuarios guardados en la Base de Datos!')
    }

    return res.status(200).json(usersFromDb)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.get('/', async (req, res) => {
  try {
    const usersFromDb = await userController.getAllUsers()

    if (!usersFromDb.length) {
      return res.status(404).json('No hay usuarios guardados en la Base de Datos!')
    }

    return res.status(200).json(usersFromDb)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.post('/', async (req, res) => {
  const { username, email, password, region } = req.body

  if (!username) return res.status(400).json('Falta nombre de usuario!')
  if (!email) return res.status(400).json('Falta email de usuario!')
  if (!password) return res.status(40).json('Falta password!')
  if (!region) return res.status(400).json('Falta parametro region!')

  try {
    const emailExist = await User.findOne({
      where: {
        email
      }
    })

    if (emailExist) {
      return res
        .status(404)
        .json('Existe un usuario con esa direccion de email. Prueba con una nueva!')
    }

    const userCreated = await userController.createUser(
      username,
      email,
      password,
      region
    )

    res.status(201).json(userCreated)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.put('/:id/image-upload', async (req, res) => {
  const { id } = req.params
  const { url } = req.body

  try {
    const result = await userController.setImage(id, url)
    return res.status(200).json(result)
  } catch (error) {
    res.status(400).json('Error tratando de subir la imagen de usuario!')
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { banned, sommelier } = req.query

  try {
    if (banned) {
      const result = await userController.setBanned(id, banned)
      return res.status(200).json(result)
    }
    if (sommelier) {
      const result = await userController.setSommelier(id, sommelier)
      return res.status(200).json(result)
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router
