const { User, Buy, ReviewBuy } = require('../db')

const userBuylvlUp = async (id) => {
  const buyLvl = await User.findOne({
    where: {
      id
    }
  }
  )
  const dbBuys = await Buy.findAll({
    where: {
      userId: id
    }
  }
  )
  const dbReviews = await ReviewBuy.findAll({
    where: {
      userId: id
    }
  })
  try {
    if (buyLvl.buyLevel < 5) {
      if (buyLvl.buyLevel === 1 && dbBuys.length >= 1) {
        const lvlUp = await User.update(
          {
            buyLevel: 2
          },
          {
            where: {
              id
            }
          }
        )
        console.log('SE SUBIO A NIVEL 2')
        return lvlUp
      }
      if (buyLvl.buyLevel === 2 && dbReviews.length >= 1) {
        const lvlUp = await User.update(
          {
            buyLevel: 3
          },
          {
            where: {
              id
            }
          }
        )
        console.log('SE SUBIO A NIVEL 3')
        return lvlUp
      }
      if (buyLvl.buyLevel === 3 && dbBuys.length >= 3 && dbReviews.length >= 3) {
        const lvlUp = await User.update(
          {
            buyLevel: 4
          },
          {
            where: {
              id
            }
          }
        )
        console.log('SE SUBIO A NIVEL 4')
        return lvlUp
      }
      if (buyLvl.buyLevel === 4 && dbBuys.length >= 5 && dbReviews.length >= 5) {
        const lvlUp = await User.update(
          {
            buyLevel: 5
          },
          {
            where: {
              id
            }
          }
        )
        console.log('SE SUBIO A NIVEL 5')
        return lvlUp
      } else return console.log('No sube de nivel por el momento')
    }
  } catch (error) {
    return new Error(error.message)
  }
}

module.exports = { userBuylvlUp }
