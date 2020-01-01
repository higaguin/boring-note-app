const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  facebookId: String
});

const users = mongoose.model("users", userSchema);

module.exports = users;
