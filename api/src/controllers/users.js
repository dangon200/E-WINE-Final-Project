const { User } = require("../db");
const { Op } = require("sequelize");

const { v4: uuidv4 } = require("uuid");

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
};
