const { Buy } = require('../db')

const getAllBuy = async () => {
  try {
    const allBuys = await Buy.findAll()
    return allBuys
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuyById = async (id) => {
  try {
    const BuyById = Buy.findByPk(id)
    return BuyById
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuyByUser = async (userId) => {
  try {
    const BuyByUser = Buy.findAll({

    })
    return BuyByUser
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuyByPublication = async (publicationId) => {
  try {
    const BuyByPublication = Buy.findAll({

    })
    return BuyByPublication
  } catch (error) {
    return new Error(error.message)
  }
}
module.exports = {
  getAllBuy,
  getBuyById,
  getBuyByUser,
  getBuyByPublication
}
