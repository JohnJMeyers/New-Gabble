const express = require('express');
const router = express.Router();
const models = require('../models')

let tryThis
var sess

router.get('/create', function(req, res){
  sess = req.session
  if (sess.username) {
    return res.render('create', {
      username: sess.username

    })
  }
  else {
    return res.redirect('/login')
  }
})

router.post('/create', function(req, res){

  sess = req.session
  tryThis = sess.username
  console.log(sess.username)
  const gab = models.Gab.build({
    username: tryThis,
    text: req.body.createArea,
    userId: sess.userId
    // date: new Date();
  })
  gab.save().then(function(gab){
    return res.redirect('/')
  })

  // const gab = models.Gab.build({
  //   username: sess.username,
  //   text: req.body.createArea,
  //   userId: sess.userId,
  //   date: new Date()
  //
  // })
  // gab.save()
  // .then(function(gab){
  //   sess.gabId = gab.id
  //   res.redirect('/')
  // })


  // const user = models.User.findOne({
  //   where: {
  //     username: sess.username
  //   },
  //   include: [
  //     {
  //       model: models.Gab
  //     }
  //   ]
  // }).then(function(users){
  //   const gab = models.Gab.build({
  //     text: req.body.createArea,
  //     // date: gab.createdAt,
  //     userId: user.id
  //   })
  //   gab.save()
  //   res.redirect("/")
  // })
    .catch(function(bigErrorThing){

      res.render("create", {
        user: user,
        errors: bigErrorThing.errors
      })
    })
    // return res.render('create')
})


module.exports = router
