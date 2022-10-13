const { DataTypes } = require('sequelize')

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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
