const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.get('/', function (req, res) {
  sess = req.session
  console.log(sess.username)
  console.log(sess.password)
  console.log(sess.userId)
  if (sess.username) {


    // const users = models.User.findAll({
    //   include: [
    //     {
    //       model: models.Gab
    //     }
    //   ]
    // }).then(function(users){
    //   return res.render('gabble', {
    //     users: users,
    //     model: models.gab
    //   })
    // })

    const gab = models.Gab.findAll({
      include: [
        {
          model: models.User,
          as: 'gabUser'
        }
      ]
    }).then(function(gabs){
      return res.render('gabble', {
        username: sess.username,
        gabs: gabs

      })
    })



    // models.Gab.findAll().then( function(gabs){
    //   res.render('gabble', {
    //     username: sess.username,
    //     gabs: gabs
    //   })
    // })

  }
  else {
    res.redirect('/login')
  }
})

module.exports = router
