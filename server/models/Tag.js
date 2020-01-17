const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = new Schema({
	title: { type: String },
	user: { type: Schema.ObjectId, ref: "users", unique: false }
});

const tags = mongoose.model("tags", tagSchema);

module.exports = tags;
