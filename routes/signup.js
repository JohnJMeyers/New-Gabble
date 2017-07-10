const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.get('/signup', function (req, res) {
  return res.render('signup')
})

router.post('/signup', function (req, res) {
  // let newUser = req.body.username;
  // let newPass = req.body.password
  // let newPassConfirm = req.body.passwordConfirm

  if (req.body.password === req.body.passwordConfirm) {

    models.User.findOrCreate({
      where: {
        username: req.body.username
      }
    }).spread(function(user, wasCreated){
      if (wasCreated){
        user.password = req.body.password
        user.save()
        .then(function(){
          sess = req.session
          sess.username = user.username
          sess.password = user.password
          sess.userId = user.id
          console.log('---------$$$$$$$$$$$-------' + sess.userId);
           return res.redirect('/')
        })
     } else {
       return res.redirect('/signup')
     }
   }).catch(function(err){
     console.log(err)
     req.checkBody('post')
     return res.redirect('/signup')
   })
  //  sess.userId = user.id
  //  return res.redirect('/')
}})
module.exports = router
