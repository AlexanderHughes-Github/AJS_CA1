// routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Ensure this points to your User model
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Stored hash:', hashedPassword);

        user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },  // 1 hour
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt for email: ${email}`);  // Log email

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Login failed: User not found');  // Debug log
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);  // Debug log: check password match
        if (!isMatch) {
            console.log('Stored hash in DB:', user.password);
            console.log('Submitted password:', password);
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) {
                console.error('Token generation error:', err);
                throw err;
            }
            res.json({ token });
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send('Server error');
    }
});




module.exports = router;


