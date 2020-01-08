const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
	title: { type: String, unique: true },
	text: { type: String, unique: true },
	user: { type: Schema.ObjectId, ref: "users", unique: true },
	tags: [{ type: Schema.ObjectId, ref: "tags" }],
	created: Date,
	updated: Date
});

const notes = mongoose.model("notes", noteSchema);

module.exports = notes;
