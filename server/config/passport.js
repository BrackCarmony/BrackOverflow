var LocalStrategy = require('passport-local').Strategy;
var User = require('./../models/User');
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
var gravatar = require('gravatar');

var localStrat = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  process.nextTick(function() {
    User.findOne({
      email: email
    }, function(err, user) {
      if (err) return done(err)
      if (user) {
        if (user.validPassword(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } else {
        var newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.pictureUrl = gravatar.url(email, {s: 200, f: 'y', d: 'identicon'});
        newUser.display_name = req.body.display_name;

        newUser.save(function(err) {
          if (err) {
            console.log(err);
            done(null, false)
          }
          done(null, newUser);
        });
      }
    });
  });
});

module.exports = function(app, passport) {
  app.use(passport.initialize());
  app.use(passport.session());

  app.post('/auth/login', passport.authenticate('local', {
    successRedirect: "/api/me",
    failureRedirect: "/loginFailure"
  }))

  passport.serializeUser(function(user, done) {
    //console.log("serializing user", user);
    var serializedUser = {
      _id: user._id
    };
    done(null, serializedUser);
  });

  passport.deserializeUser(function(obj, done) {
    User.findById(obj._id, function(err, user) {
      //console.log(err, ":err || user:", user);
      done(err, user);
    });
  });

  passport.use('local', localStrat);
}
