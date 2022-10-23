const { BuyItem } = require('../db')

const getAllBuyItems = async () => {
  const resultParsed = []
  try {
    const dbResult = await BuyItem.findAll()
    console.log(dbResult)
    dbResult?.forEach(b => {
      resultParsed.push({
        buyItemId: b.dataValues.id,
        countProducts: b.dataValues.countProduct,
        publicationId: b.dataValues.publicationId,
        buyId: b.dataValues.buyId
      })
    })
    console.log('resultados parseados', resultParsed)

    return resultParsed
  } catch (error) {
    return new Error(error.message)
  }
}

const getAllBuyItemsOfBuy = async (buyId) => {
  const resultParsed = []
  try {
    const dbResult = await BuyItem.findAll({
      where: {
        buyId
      }
    })
    console.log(dbResult)
    dbResult?.forEach(b => {
      resultParsed.push({
        buyItemId: b.dataValues.id,
        countProducts: b.dataValues.countProduct,
        publicationId: b.dataValues.publicationId,
        buyId: b.dataValues.buyId
      })
    })
    console.log('resultados parseados', resultParsed)

    return resultParsed
  } catch (error) {
    return new Error(error.message)
  }
}
module.exports = {
  getAllBuyItems,
  getAllBuyItemsOfBuy
}
