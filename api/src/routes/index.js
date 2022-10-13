const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const userRouter = require('./users')

const router = Router()
const publicationRoutes = require('./publicationRoutes.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/publications', publicationRoutes)

module.exports = router
