const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = new Schema({
  title: String,
  user: { type: Schema.ObjectId, ref: "users" }
});

const tags = mongoose.model("tags", tagSchema);

module.exports = tags;
