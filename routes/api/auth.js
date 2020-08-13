const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../model/User');

//@route    GET api/auth
//@desc     Test route
//@Access   public
router.get('/', auth, async (req, res) => res.send('Auth route'));

try {
  const user = await User.findById(req.user.id);
} catch (err) {}

module.exports = router;
