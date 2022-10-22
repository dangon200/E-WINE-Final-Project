const { Buy, BuyItem, Publication } = require('../db')

const getAllBuy = async () => {
  const resultParsed = []
  try {
    const dbResult = await Buy.findAll()
    console.log(dbResult)
    dbResult?.forEach(b => {
      resultParsed.push({
        id: b.dataValues.id,
        currency: b.dataValues.currency,
        paymentMethod: b.dataValues.paymentMethod,
        totalAmount: b.dataValues.totalAmount,
        userId: b.dataValues.userId
      })
    })
    console.log('resultados parseados', resultParsed)

    return resultParsed
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuyById = async (id) => {
  try {
    const dbResult = Buy.findByPk(id)
    const resultParsed = {
      id: dbResult.id,
      currency: dbResult.currency,
      paymentMethod: dbResult.paymentMethod,
      totalAmount: dbResult.totalAmount,
      userId: dbResult.userId
    }
    return resultParsed
  } catch (error) {
    return new Error('Error al buscar una compra por Id')
  }
}
const getBuysByUser = async (userId) => {
  try {
    const BuyByUser = await Buy.findAll({
      where: {
        userId
      }
    })
    return BuyByUser
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuysByPublication = async (publicationId) => {
  try {
    const BuyByPublication = await Buy.findAll({
      include: [
        {
          model: BuyItem,
          where: {
            publicationId
          }
        }
      ]
    })
    return BuyByPublication
  } catch (error) {
    return new Error(error.message)
  }
}
const getBuysByProducts = async (productId) => {
  try {
    const BuyByProduct = await Buy.findAll({
      include: [
        {
          model: BuyItem,
          include: [{
            model: Publication,
            where: {
              productId
            }
          }]
        }
      ]
    })
    return BuyByProduct
  } catch (error) {

  }
}
module.exports = {
  getAllBuy,
  getBuyById,
  getBuysByUser,
  getBuysByPublication,
  getBuysByProducts
}
