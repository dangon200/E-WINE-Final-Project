const { Product, Varietal } = require('../db')

const createProduct = async (name, type, varietalId, origin, img, cellar) => {
  try {
    const productCreated = await Product.create({
      name,
      type,
      varietalId,
      origin,
      img,
      cellar
    })

    return productCreated
  } catch (error) {
    throw new Error('Error tratando de crear un nuevo producto!')
  }
}

const getAllProducts = async () => {
  const results = []

  try {
    const dbResults = await Product.findAll({
      include: [{
        model: Varietal
      }]
    })

    dbResults.forEach(r => {
      results.push({

        id: r.id,
        name: r.name,
        type: r.type,
        varietal: r.varietal.name,
        origin: r.origin,
        img: r.img,
        cellar: r.cellar

      })
    })

    return results
  } catch (error) {
    throw new Error('Error tratando de obtener todos los productos de la base de datos!')
  }
}

const getProductById = async (id) => {
  try {
    const dbResult = await Product.findByPk(id, {
      include: Varietal
    })

    if (!dbResult) return null

    const result = {

      id: dbResult.id,
      name: dbResult.name,
      type: dbResult.type,
      varietal: dbResult.varietal.name,
      origin: dbResult.origin,
      img: dbResult.img,
      cellar: dbResult.cellar

    }

    return result
  } catch (error) {
    throw new Error('Error tratando de encontrar un producto por su ID!')
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById
}
