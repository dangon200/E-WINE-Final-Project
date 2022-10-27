const { Router } = require('express')
const router = Router()

const { Question, Publication, User } = require('../db')
const { v4: uuidv4 } = require('uuid')

router.get('/:publicationId', async (req, res) => {
  const { publicationId } = req.params

  try {
    const results = []

    const questions = await Question.findAll({
      include: [{
        model: Publication
      }, {
        model: User
      }],
      where: {
        publicationId
      },
      order: [['createdAt', 'DESC']]
    })

    if (!questions.length) return res.status(200).json('No hay preguntas en la publicacion!')

    questions.forEach(r => {
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

router.post('/answer/:id', async (req, res) => {
  const { id } = req.params
  const { answer, publicationId } = req.body

  try {
    const results = []

    await Question.update({ answer }, {
      where: {
        id
      }
    })

    const questions = await Question.findAll({
      include: [{
        model: Publication
      }, {
        model: User
      }],
      where: {
        publicationId
      },
      order: [['createdAt', 'DESC']]
    })

    questions.forEach(r => {
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
  const { userId, publicationId, text } = req.body

  try {
    const results = []

    await Question.create({
      id: uuidv4(),
      userId,
      publicationId,
      text
    })

    const questions = await Question.findAll({
      include: [{
        model: Publication
      }, {
        model: User
      }],
      where: {
        publicationId
      },
      order: [['createdAt', 'DESC']]
    })

    questions.forEach(r => {
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

module.exports = router
