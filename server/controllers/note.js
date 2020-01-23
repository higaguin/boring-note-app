let noteController = {};
const models = require("../models");
require("../models/Tag");

noteController.getNoteByIdAndUser = (req, res) => {
	models.Note.findOne({ _id: req.params.id, user: req.user._id })
		.populate("tags")
		.exec(function(err, note) {
			if (err) return res.status(500).send(err);

			return res.status(200).send(note);
		});
};

noteController.getNotesByUser = (req, res) => {
	models.Note.find({ user: req.user._id })
		.populate("tags")
		.exec(function(err, notes) {
			if (err) return res.status(500).send(err);

			return res.status(200).send(notes);
		});
};

noteController.createNote = (req, res) => {
	models.Note.create(
		{
			title: req.body.title,
			text: req.body.text,
			user: req.user._id,
			tags: req.body.tags,
			created: new Date()
		},
		function(err, note) {
			if (err)
				return res
					.status(500)
					.send("There was a problem adding the information to the database.");
			return res.status(201).send(note);
		}
	);
};

noteController.updateNote = (req, res) => {
	models.Note.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ upsert: true },
		(err, note) => {
			if (err)
				return res
					.status(500)
					.send(
						"There was a problem updating the information to the database."
					);
			return res.status(200).send(note);
		}
	);
};

noteController.deleteNote = (req, res) => {
	models.Note.findByIdAndRemove(req.params.id, (err, note) => {
		if (err)
			return res
				.status(500)
				.send("There was a problem deleting the information to the database.");
		return res.status(200).send(req.params.id);
	});
};

module.exports = noteController;
