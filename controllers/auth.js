const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

//User Model
const User = require("../model/user");

/*
  >>Register Helper
*/

exports.register = async (req, res) => {
  //Cred Validations
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ Success: false, msg: errors.array()[0].msg });

  //Check if user already exists
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res
      .status(400)
      .json({ Success: false, msg: "Email already exists" });
  }

  //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  //Finally saving user to db
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  newUser.save((err, user) => {
    if (err) return res.status(400).json({ Success: false, msg: err });

    const token = jwt.encode(user, process.env.SECRET);

    res.status(200).json({
      Success: true,
      msg: "User Registeration sucessfull",
      data: {
        token: token,
        user: { id: user._id, name: user.name, email: user.email },
      },
    });
  });
};

/*
  >>Login helper
*/

exports.login = async (req, res) => {
  //Cred Validation
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ Success: false, msg: errors.array()[0].msg });

  //Check for email in Db
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ Success: false, msg: "User not found" });

  //Check for password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res
      .status(403)
      .json({ Success: false, msg: "Email and Password does not match" });

  const token = jwt.encode(user, process.env.SECRET);

  res.status(200).json({
    Success: true,
    msg: "Login success",
    data: {
      token: token,
      user: { id: user._id, name: user.name, email: user.email },
    },
  });
};

/* 
 >> User helper
*/

exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user)
      return res.status(403).json({ Success: false, msg: "No user found" });
    res.json({ Success: true, data: user });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};
