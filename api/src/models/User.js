const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING ,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      buyLevel: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      sellLevel: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },
      balance: {
        type: DataTypes.FLOAT,
        defaultValue: 1000
      },
      image: {
        type: DataTypes.TEXT,
        defaultValue: null
      },
      isSommelier: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: false
    }
  )
}
