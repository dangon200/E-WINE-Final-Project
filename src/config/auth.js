const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(' ')[1]
    const decodedToken = await jwt.verify(
      token,
      'RANDOM_TOKEN'
    )
    const user = await decodedToken
    req.user = user
    next()
  } catch (error) {
    res.status(401).json('No estas autorizado!')
  }
}
