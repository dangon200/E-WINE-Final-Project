const { User } = require('../db')
// const { Op } = require('sequelize')

const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')

const getUserById = async (id) => {
  try {
    const dbResult = await User.findByPk(id)
    if (!dbResult) return null

    const result = {
      id: dbResult.id,
      username: dbResult.username,
      email: dbResult.email,
      region: dbResult.region,
      image: dbResult.image,
      isBanned: dbResult.isBanned,
      isAdmin: dbResult.isAdmin,
      isSommelier: dbResult.isSommelier,
      balance: dbResult.balance,
      buyLevel: dbResult.buyLevel
    }
    return result
  } catch (error) {
    throw new Error('Error tratando de encontrar un usuario por su ID!')
  }
}

const getAllUsers = async () => {
  const results = []

  try {
    const dbResults = await User.findAll()

    dbResults.forEach((r) => {
      results.push({
        id: r.id,
        username: r.username,
        email: r.email,
        region: r.region,
        image: r.image,
        isBanned: r.isBanned,
        isAdmin: r.isAdmin,
        isSommelier: r.isSommelier,
        balance: r.balance,
        buyLevel: r.buyLevel
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const getAllUsersBanned = async () => {
  const results = []

  try {
    const dbResults = await User.findAll({
      where: {
        isBanned: true
      }
    })

    dbResults.forEach((r) => {
      results.push({
        id: r.id,
        username: r.username,
        email: r.email,
        region: r.region,
        image: r.image,
        isBanned: r.isBanned,
        isAdmin: r.isAdmin,
        isSommelier: r.isSommelier,
        balance: r.balance,
        buyLevel: r.buyLevel
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const getAllUsersNotBanned = async () => {
  const results = []

  try {
    const dbResults = await User.findAll({
      where: {
        isBanned: false
      }
    })

    dbResults.forEach((r) => {
      results.push({
        id: r.id,
        username: r.username,
        email: r.email,
        region: r.region,
        image: r.image,
        isBanned: r.isBanned,
        isAdmin: r.isAdmin,
        isSommelier: r.isSommelier,
        balance: r.balance,
        buyLevel: r.buyLevel
      })
    })
    return results
  } catch (error) {
    throw new Error('Error tratando de obtener los usuarios de la DB!')
  }
}

const createUser = async (username, email, password, region) => {
  try {
    const userCreated = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      region,
      id: uuidv4()
    })

    return userCreated
  } catch (error) {
    throw new Error('Error tratando de crear un nuevo usuario!')
  }
}

const setBanned = async (id, banned) => {
  try {
    const userUpdated = await User.update(
      {
        isBanned: banned
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const setSommelier = async (id, sommelier) => {
  try {
    const userUpdated = await User.update(
      {
        isSommelier: sommelier
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const setImage = async (id, url) => {
  try {
    const userUpdated = await User.update(
      {
        image: url
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const setVerified = async (id, verified) => {
  try {
    const userUpdated = await User.update(
      {
        isVerified: verified
      },
      {
        where: {
          id
        }
      }
    )

    if (userUpdated) {
      const userById = await getUserById(id)
      return userById
    }
  } catch (error) {
    throw new Error('Error actualizando usuario!')
  }
}

const deleteUserById = async (id) => {
  try {
    const userDeleted = await User.destroy({
      where: {
        id
      }
    })
    return userDeleted
  } catch (error) {
    throw new Error('Error al eliminar el usuario!')
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getAllUsersBanned,
  getAllUsersNotBanned,
  getUserById,
  setBanned,
  setSommelier,
  setImage,
  setVerified,
  deleteUserById
}
