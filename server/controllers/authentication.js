const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

let authController = {};

authController.signIn = (req, res, next) => {
  if (req.user) {
    const token = jwt.sign({ id: req.user }, keys.jwtSecret);
    res.status(200).send({ token });
  } else {
    res.send(401);
  }
};

module.exports = authController;
