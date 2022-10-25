const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'reviewsbuy',
    {

      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      data: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  )
}
