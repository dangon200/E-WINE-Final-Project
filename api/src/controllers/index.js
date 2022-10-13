const { Publication, Product } = require('../db.js')

const getPublicationsDb = async () => {
  const results = []

  try {
    const dbResults = await Publication.findAll({
      where: {
        isBanned: false
      }
    })

    dbResults.forEach(r => {
      results.push({
        id: r.id,
        name: r.name,
        price: r.price,
        count: r.count,
        image: r.image,
        description: r.description
      })
    })

    return results
  } catch (error) {
    throw new Error('Error tratando de obtener todas las publicaciones!')
  }
}
const createPublication = async (name, price, count, image, description) => {
  try {
    const newPublication = await Publication.create({ name, price, count, image, description })
    // newPublication.addProduct(productId)

    return newPublication
  } catch (error) {
    throw new Error('Error tratando de crear nueva publicacion!')
  }
}
const getOnePublication = async (id) => {
  try {
    const pb = await Publication.findByPk(id)

    if (!pb) return null
    const result = {
      id: pb.id,
      name: pb.name,
      price: pb.price,
      count: pb.count,
      image: pb.image,
      description: pb.description
    }
    return result
  } catch (error) {
    return error
  }
}
const bannedPublication = async (id, banned) => {
  try {
    const pb = await Publication.update(
      { isBanned: banned },
      {
        where: {
          id
        }
      })
    if (pb) {
      const publicationById = await getOnePublication(id)
      return publicationById
    }
  } catch (error) {
    throw new Error('Error tratando de actualizar la publicacion!')
  }
}
module.exports = {
  getPublicationsDb,
  createPublication,
  getOnePublication,
  bannedPublication
}
