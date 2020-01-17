const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
	title: { type: String },
	text: { type: String },
	user: { type: Schema.ObjectId, ref: "users" },
	tags: [{ type: Schema.ObjectId, ref: "tags" }],
	created: Date,
	updated: Date
});

const notes = mongoose.model("notes", noteSchema);

module.exports = notes;
