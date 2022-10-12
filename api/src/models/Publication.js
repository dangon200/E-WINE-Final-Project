const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('publication', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
}
