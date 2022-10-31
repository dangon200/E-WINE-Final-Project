const { createBuy } = require('../controllers/webhooksMP')

const PagarProducto = async (req, res, next) => {
  console.log(req.body)
  console.log(req.query['data.id'])

  if (req.query['data.id'] !== undefined) {
    try {
      await createBuy(req.query['data.id'])
      res.status(200).send('OK')
    } catch (error) {
      console.log(error.message)
      res.status(400).send('ERROR')
    }
  } else {
    next()
  }
}

module.exports = { PagarProducto }
