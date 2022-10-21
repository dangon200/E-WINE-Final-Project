const { Buy, Publication, BuyItem, User } = require('../db')
const Stripe = require('stripe')
// const BuyItem = require('../models/BuyItem')
// const Publication = require('../models/Publication')
// const User = require('../models/User')

const { STRIPE_KEY } = process.env
const stripe = new Stripe(STRIPE_KEY)

const createBuy = async ({ idStripe, totalAmount, carrito, userId }) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'ARS',
      description: 'Prueba',
      payment_method: idStripe,
      confirm: true
    })
    console.log(payment)
    const newBuy = await Buy.create({
      idBack: payment.id,
      currency: payment.currency,
      paymentMethod: payment.payment_method_types.toString(),
      idFront: idStripe,
      totalAmount
    })
    carrito?.map(async (p) => {
      const newBuyItem = await createBuyItem(p.count, p.id)
      newBuy.addBuyItem(newBuyItem)
    })
    console.log(userId)
    // const userId2 = 'ba116f56-90eb-4f3e-ab5a-ac556dcf7e44'
    const user = User.findByPk(userId)
    newBuy.addUser(user)

    return newBuy
  } catch (error) {
    console.log(error)
    return new Error(`${error.raw.message} Error en la generación del pago con tarjeta`)
  }
}
const createBuyItem = async (countProduct, publicationId) => {
  try {
    const newBuyItem = await BuyItem.create({
      countProduct
    })
    const publication = Publication.findByPk(publicationId)
    newBuyItem.addPublication(publication)
    return newBuyItem
  } catch (error) {
    return new Error('Error en la creación del BuyItem')
  }
}

module.exports = {
  createBuy,
  createBuyItem
}
