const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// @route POST /login
// @description - User login
// @access public
router.post('/', (req, res) => {
  // Extract request body
  const { email, password } = req.body;

  // Do a basic validation
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: 'All fields are required'
    });
  }

  // User passed validations
  // Check if user already exists
  User.findOne({ email }, (err, user) => {
    if (err) return res.status(500).json({ status: false, message: 'Internal server error' });

    // User does not exists
    if (!user) return res.status(400).json({ status: false, message: 'User account does not exist yet' });


    // Check user password

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ status: false, message: 'Internal server error::password check failed' });

      if (!isMatch) return res.status(401).json({ status: false, message: 'Email of Password does not match' });

      // There is a match => User was found
      const payload = { id: user._id };
      jwt.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
        if (err) return res.status(500).json({ status: false, message: 'Internal server error:: Could not generate token' });

        // token exists
        return res.status(200).json({
          status: true,
          message: 'User login was successful',
          token,
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
          }
        });
      });
    });
  });
});
module.exports = router;