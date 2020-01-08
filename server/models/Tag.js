const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = new Schema({
	title: { type: String, unique: true },
	user: { type: Schema.ObjectId, ref: "users", unique: true }
});

const tags = mongoose.model("tags", tagSchema);

module.exports = tags;
