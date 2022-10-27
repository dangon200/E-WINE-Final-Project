require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false // lets Sequelize know we can use pg-native for ~30% more speed
  }
)
const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1]
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Product, User, Publication, Buy, BuyItem, Favorite, Question, Review, Varietal, Reviewbuy } = sequelize.models

// Aca vendrian las relaciones
User.hasMany(Publication)
Publication.belongsTo(User)

User.hasMany(Buy)
Buy.belongsTo(User)

Product.hasMany(Publication)
Publication.belongsTo(Product)

Publication.hasMany(Buyitem)
Buyitem.belongsTo(Publication)

Buy.hasMany(Buyitem)
Buyitem.belongsTo(Buy)

User.hasMany(Favorite)
Favorite.belongsTo(User)

Reviewbuy.belongsTo(User)
User.hasMany(Reviewbuy)

Publication.hasMany(Reviewbuy)
Reviewbuy.belongsTo(Publication)

User.hasMany(Question)
Question.belongsTo(User)

Publication.hasMany(Question)
Question.belongsTo(Publication)

User.hasMany(Review)
Review.belongsTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

Varietal.hasMany(Product)
Product.belongsTo(Varietal)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize // para importart la conexión { conn } = require('./db.js');
}
