const express = require('express');
const router = express.Router();
const models = require('../models')

var sess


router.get('/login', function(req, res) {
  return res.render('login')
})

router.post('/login', function (req, res) {
  sess = req.session

  let postUser = req.body.username;
  let postPass = req.body.password;

  const user = models.User.findOne({
    where: {
      username: postUser,
      password: postPass
    }
  }).then( function (user) {
    if (user) {
      sess.username = user.username
      sess.password = user.password
      sess.userId = user.id
      return res.redirect('/' )
    } else {
      return res.redirect('/login')
    }
  })
})
module.exports = router
