const { Publication, Product } = require('../db.js')

const getPublicationsDb = async () => {
  const results = []

  try {
    const dbResults = await Publication.findAll({
      include: Product,
      where: {
        isBanned: false
      }
    })

    dbResults.forEach(r => {
      results.push({
        id: r.id,
        title: r.title,
        price: r.price,
        count: r.count,
        image: r.image,
        description: r.description,
        name: r.product.name,
        type: r.product.type,
        varietal: r.product.varietal,
        cellar: r.product.cellar,
        img: r.product.img,
        origin: r.product.origin
      })
    })

    return results
  } catch (error) {
    throw new Error('Error tratando de obtener todas las publicaciones!')
  }
}
const createPublication = async (productId, title, price, count, image, description) => {
  try {
    const newPublication = await Publication.create({ title, price, count, image, description, productId })

    return newPublication
  } catch (error) {
    throw new Error('Error tratando de crear nueva publicacion!')
  }
}
const getOnePublication = async (id) => {
  try {
    const pb = await Publication.findByPk(id, {
      include: Product
    })

    if (!pb) return null
    const result = {
      id: pb.id,
      title: pb.title,
      price: pb.price,
      count: pb.count,
      image: pb.image,
      description: pb.description,
      name: pb.product.name,
      type: pb.product.type,
      varietal: pb.product.varietal,
      cellar: pb.product.cellar,
      img: pb.product.img,
      origin: pb.product.origin
    }
    return result
  } catch (error) {
    throw new Error('Error tratando de encontrar una Publicacion por su ID')
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
