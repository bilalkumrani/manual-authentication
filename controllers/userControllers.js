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
      return res.redirect("/");
    }
  });
  console.log(req.body);
  return res.redirect("back");
};

const all = async (req, res) => {
  const users = await User.find({});
  return res.render("all_users", { users });
};

module.exports.register = register;
module.exports.all = all;
