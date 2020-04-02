const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

// @route /users/me
// @description  get user by header auth token
// @access private
router.get('/me', checkAuth, (req, res) => {

  User.findOne({ _id: req.user }, (err, user) => {
    if (err) return res.status(500).json({ status: false, message: 'Internal server error::could not find user' });

    // very unlikely
    if (!user) return res.status(500).json({ status: false, message: 'No matching user' });

    return res.status(200).json({
      status: true,
      message: 'Requested user',
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      }
    });
  });
});
module.exports = router;