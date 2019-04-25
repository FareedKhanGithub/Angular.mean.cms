var express = require('express');
var router = express.Router();
var passport = require('passport');

var Users = require('../../models/users');


router.post('/register', function(req,res,next){
  var data = req.body;

  Users.register(new Users({
    username: data.username,
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name
  }), data.password, function(err, user){
    if(err){
      return res.json({success: false,user: req.body,errors: err});
    }else{
      return res.json({success: true,user: user});
    }
  });

});

router.post('/login', function(req, res, next) {

  passport.authenticate('local', function(err, user, info) {

    if (err) {
      return res.json({success:false, error: err});
    }

    if (!user) {
      return res.json({success:false, error: info.message });
    }

    req.logIn(user, function(err) {

      if (err) {
        return res.json({success:false, error: err });
      }else{
        return res.json({success:true, user: user });
      }

    });
  })(req, res, next);
});

router.delete('/logout', function(req, res){
  req.logout();
  if(!req.session.passport.user){
    return res.json({success: 'true'});
  }else{
    return res.json({success: 'false'});
  }
});

module.exports = router;
