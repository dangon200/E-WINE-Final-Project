const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Sin tipo'
    },
    varietal: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'varietal vacia'
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'sl vacia'
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 0
    },
    pkreseña: {
      type: DataTypes.TEXT,
      defaultValue: 0
    },
    cellar: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
