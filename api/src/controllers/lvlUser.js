const { User, Buy, Reviewbuy } = require('../db')

const userBuylvlUp = async (id) => {
  const buyLvl = User.buyLevel
  const dbBuys = await Buy.findAll({
    where: {
      userId: id
    }
  })
  const dbReviews = await Reviewbuy.findAll({
    where: {
      userId: id
    }
  })
  try {
    if (buyLvl < 5) {
      if (buyLvl === 1 && dbBuys.length >= 1) {
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
        return lvlUp
      }
      if (buyLvl === 2 && dbReviews.length >= 1) {
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
        return lvlUp
      }
      if (buyLvl === 3 && dbBuys >= 3 && dbReviews >= 3) {
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
        return lvlUp
      }
      if (buyLvl === 4 && dbBuys >= 5 && dbReviews >= 5) {
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
        return lvlUp
      } else return console.log('No sube de nivel por el momento')
    }
  } catch {

  }
}

module.exports = { userBuylvlUp }
