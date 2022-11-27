const registerModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//register
module.exports.userRegister = async (req, res) => {
  const error = [];
  const { userName, password, confirmPassword, email } = req.body;
  console.log(userName, email, password, confirmPassword);

  //validation
  if (!userName) {
    error.push("Please input your user name");
  }
  if (!email) {
    error.push("Please input your  email");
  }
  if (!password) {
    error.push("Please input password");
  }
  if (password !== confirmPassword) {
    error.push("confirm password mismatch");
  }

  if (error.length > 0) {
    //sending error respone to client
    res.send({
      error: error,
    });

    // if no error
  } else {
    const checkUser = await registerModel.findOne({ email: email });

    if (checkUser) {
      res.status(400).json({ error: ["email alrady exist"] });
    } else {
      try {
        const salt = await bcrypt.genSalt(10);
        const userCreate = await registerModel.create({
          userName,
          email,
          password: await bcrypt.hash(password, salt),
        });

        const token = jwt.sign(
          {
            id: userCreate._id,
            email: userCreate.email,
            userName: userCreate.userName,
          },
          process.env.SECRET,
          { expiresIn: process.env.TOKEN_EXP }
        );
        res.status(201).json({
          message: "Account created successfully",
          token,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

//login
module.exports.userLogin = async (req, res) => {
  const error = [];

  const { email, password } = req.body;
  if (!email) {
    error.push("Email address required");
  }
  if (!email) {
    error.push("password required!");
  }
  if (error.length > 0) {
    res.status(400).json({
      error: error,
    });
  } else {
    try {
      const checkUser = await registerModel
        .findOne({ email: email })
        .select("+password");

      if (checkUser) {
        const matchPassword = await bcrypt.compare(
          password,
          checkUser.password
        );

        if (matchPassword) {
          const token = jwt.sign(
            {
              id: checkUser._id,
              email: checkUser.email,
              userName: checkUser.userName,
            },
            process.env.SECRET,
            { expiresIn: process.env.TOKEN_EXP }
          );
          res.status(200).json({
            successMessage: "Login successful",
            token,
          });
        } else {
          res.status(400).json({ error: ["Invalid password"] });
        }
      } else {
        res.status(400).json({ error: ["Email not Found"] });
      }
    } catch (error) {
      res.status(404).json({
        error: ["Internal server error"],
      });
    }
  }
};

module.exports.userLogout = (req, res) => {
  res.status(200).json({
    successMessage: "Logout",
    token: "",
  });
};
