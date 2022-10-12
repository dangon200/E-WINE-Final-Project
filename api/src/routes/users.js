const { Router } = require("express");
const router = Router();

const { User } = require("../db");
const { v4: uuidv4 } = require("uuid");

const userController = require("../controllers/users");

router.post("/", async (req, res) => {
  const { username, email, password, region } = req.body;

  if (!username) return res.status(404).json("Username is missing!");
  if (!email) return res.status(404).json("Email is missing!");
  if (!password) return res.status(404).json("Password is missing!");
  if (!region) return res.status(404).json("Region is missing!");

  try {
    const userCreated = await userController.createUser(
      username,
      email,
      password,
      region
    );

    res.status(201).json(userCreated);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
