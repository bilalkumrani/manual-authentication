const passport = require("passport");
const User = require("../models/userSchema");
const passportLocalStrategy = require("passport-local");

passport.use(
  new passportLocalStrategy(
    {
      usernameField: "email",
    },
    function (username, password, done) {
      User.findOne({ email: username }, (err, user) => {
        if (err) {
          console.log("Error in finding user --> passport");
          return done(err);
        }

        if (!user || user.password != password) {
          console.log("Invalid pass/email --> passport");
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

// serailizing the user (sending token etc to save in cookie)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserializing the user (getting token back from cookies)

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      console.log("there is error");
      return done(err);
    }
    return done(null, user);
  });
});

module.exports = passport;
