const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@route    POST api/users
//@desc     Register user
//@Access   public
router.post(
  '/',
  [
    // username must be an email
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    // password must be at least 5 chars long
    check(
      'password',
      'Please include a valid password with at least 6 characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //See if the user exists

    //Get the gravatar

    //Encrypt password

    //return Jsonwebtoken

    res.send('User route');
  }
);

module.exports = router;
