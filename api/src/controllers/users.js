const { User } = require("../db");
const { Op } = require("sequelize");

const { v4: uuidv4 } = require("uuid");

const getUserById = async (id) => {
  try {
    const dbResult = await User.findByPk(id);

    if (!dbResult) return null;

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
    };
    console.log(result);

    return result;
  } catch (error) {
    throw new Error("Error finding a user by its ID!");
  }
};

const getAllUsers = async () => {
  const results = [];

  try {
    const dbResults = await User.findAll();

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
      });
    });
    return results;
  } catch (error) {
    throw new Error("Error trying to get all users from DB!");
  }
};

const createUser = async (username, email, password, region) => {
  const result = [];

  try {
    const userCreated = await User.create({
      username,
      email,
      password,
      region,
      id: uuidv4(),
    });

    return userCreated;
  } catch (error) {
    throw new Error("Error trying to create a new User!");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
