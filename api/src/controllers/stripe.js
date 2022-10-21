const { Buy } = require('../db')
const Stripe = require('stripe')
const BuyItem = require('../models/BuyItem')

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
    // newBuy.addUser(userId)
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
    newBuyItem.addPublication(publicationId)
    return newBuyItem
  } catch (error) {
    return new Error('Error en la creación del BuyItem')
  }
}

module.exports = {
  createBuy,
  createBuyItem
}
