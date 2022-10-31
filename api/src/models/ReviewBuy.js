const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ReviewBuy', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    puntuado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })
}
