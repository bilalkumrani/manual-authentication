const User = require("../models/userSchema");

const register = (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log("error in finding user while signing up");
    }
    if (!user) {
      User.create(
        {
          name,
          email,
          password,
        },
        (err) => {
          if (err) {
            console.log("error in creating user");
          }
          return res.redirect("/");
        }
      );
    } else {
      return res.redirect("/login");
    }
  });
  console.log(req.body);
  return res.redirect("back");
};

const all = async (req, res) => {
  const users = await User.find({});
  return res.render("all_users", { users });
};

const createSession = (req, res) => {
  //find the user
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("*** user not found");
    }
    if (user) {
      //handle password mismatch
      if (req.body.password !== user.password) {
        console.log("incorrect password!");
        return res.redirect("back");
      } else {
        res.cookie("user_id", user.id);
        return res.redirect("/users/profile");
      }
      console.log("***user found");
    }
  });

  //handle user found

  //handle user not found
};

const profile = (req, res) => {
  if (req.cookies.user_id) {
    User.findOne({ _id: req.cookies.user_id }, (err, user) => {
      if (user) {
        return res.render("profile", { user });
      } else {
        return res.redirect("/login");
      }
    });
  } else {
    return res.redirect("/login");
  }
};

const signout = (req, res) => {
  res.cookie("user_id", "");
  return res.redirect("/users/profile");
};
module.exports.register = register;
module.exports.all = all;
module.exports.createSession = createSession;
module.exports.profile = profile;
module.exports.signout = signout;
