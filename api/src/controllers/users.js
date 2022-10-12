const { User } = require("../db");
const { Op } = require("sequelize");

const { v4: uuidv4 } = require("uuid");

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
};
