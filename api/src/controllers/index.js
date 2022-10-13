const { Sequelize } = require('sequelize')
const { Publication,Product } = require('../db.js')
// const { dbApiKey } = require('../utils/config');
const axios = require('axios')

const getPublicationsDb = async () => {
  const pub = await Publication.findAll({
    where: {
      isBanned: false
    }
    // include: Product
  })
  return pub
}
const createPublication = async (reqBody) => {
  try {
    const { productId, name, price, count, image, description } = reqBody
    if (!price || !count || !image || !description) return 'Falta información'
    const newPublication = await Publication.create({ name, price, count, image, description })
    // newPublication.addProduct(productId)

    return newPublication
  } catch (error) {
    return error
  }
}
const getOnePublication = async (id) => {
  try {
    const pb = await Publication.findByPk(id)
    return pb
  } catch (error) {
    return error
  }
}
const bannedPublication = async (id) => {
  try {
    const pb = await Publication.update(
      { isBanned: true },
      {
        where: {
          id
        }
      })
    return pb
  } catch (error) {
    return error
  }
}
module.exports = {
  getPublicationsDb,
  createPublication,
  getOnePublication,
  bannedPublication
}
