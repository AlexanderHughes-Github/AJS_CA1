const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email.includes('@')) {
      return res.status(400).json({ message: "Email must include '@'" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'secret_key'); 
    res.status(201).send({ token });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

module.exports = router;
