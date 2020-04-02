const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
// @route POST /signup
// @description - User signup
// @access public
router.post('/', (req, res) => {
  // Extract request body
  const { firstname, lastname, email, password } = req.body;

  // Do a basic validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({
      status: false,
      message: 'All fields are required'
    });
  }

  // User passed validations
  // Check if user already exists
  User.findOne({ email }, (err, user) => {
    if (err) return res.status(500).json({ status: false, message: 'Internal server error' });

    // User exists
    if (user) return res.status(400).json({ status: false, message: 'User already exists' });

    // Create a new User
    let newUser = new User({ firstname, lastname, email, password });
    // Hash password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ status: false, message: 'Failed to generate salt' });

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return res.status(500).json({ status: false, message: 'Internal server error:: failed to hash password' });
        // Update password with the hash and save
        newUser.password = hash;

        newUser.save(err => {
          if (err) return res.status(500).json({ status: false, message: 'Internal server error:: failed to save user to DB' });
          const payload = { id: newUser._id };
          jwt.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
            if (err) return res.status(500).json({ status: false, message: 'Internal server error:: failed to generate token' });

            return res.status(201).json({
              status: true,
              message: 'User signup was successful',
              token,
              user: {
                id: newUser._id,
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname
              }
            });

          });



        });


      });


    });


  });
});
module.exports = router;