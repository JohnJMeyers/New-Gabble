const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.post('/logout', function(req, res) {
  sess = req.session
  // req.session.username = {};
  sess.username = ''


  return res.redirect('/login')
})

module.exports = router
