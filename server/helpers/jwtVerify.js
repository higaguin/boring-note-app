const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = jwtVerify = (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) return res.status(403).send("token not received");

  const token = authorization.split(" ")[1];

  req.token = token;
  jwt.verify(token, keys.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).send("token not valid");
    } else {
      req.user = decoded.id;
      next();
    }
  });
};
