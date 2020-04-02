const express = require('express');

const router = express.Router();
// @route POST /signup
// @description - User signup
// @access public
router.post('/', (req, res) => {
  // Extract request body
  const { firstname, lastname, email, password } = req.body;
  // Do a basic validation
  if (!firstname || !lastname || !email || !password) {
    return res.status(500).json({
      status: false,
      message: 'All fields are required'
    });
  }

  // User passed validations
  // Check if user already exists
});
module.exports = router;