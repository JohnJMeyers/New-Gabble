const express = require('express');
const router = express.Router();
const models = require('../models')

var sess

router.post('/delete', function(req,res){

  sess = req.session
  id = sess.userId
  models.Gab.findOne({
    // where: {
    //   id: id
    // }
  }).then(function(gab){
    gab.destroy().then(function(){
      res.redirect('/')
    })
  })
})
module.exports = router
