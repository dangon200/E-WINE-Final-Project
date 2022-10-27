const { Varietal } = require('../db')

const getAllVarietals = async () => {
  const resultParsed = []
  try {
    const dbResult = await Varietal.findAll()
    console.log(dbResult)
    dbResult?.forEach(v => {
      resultParsed.push({
        varietalId: v.dataValues.id,
        name: v.dataValues.name,
        description: v.dataValues.description
      })
    })
    console.log('resultados parseados', resultParsed)

    return resultParsed
  } catch (error) {
    throw new Error(error.message)
  }
}

const createVarietal = async (name, description) => {
  try {
    const dbResult = await Varietal.create({ name, description })
    return dbResult
  } catch (error) {
    throw new Error(error.message)
  }
}

const updateVarietal = async (id, name, description) => {
  try {
    const dbResult = await Varietal.update(
      {
        name,
        description
      },
      {
        where: {
          id
        }
      })
    return dbResult
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getAllVarietals,
  createVarietal,
  updateVarietal
}
