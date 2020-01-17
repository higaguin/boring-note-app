const {
	getTagsByUser,
	createTag,
	deleteTag,
	checkIfExists
} = require("../controllers/tag");

const jwtVerify = require("../helpers/jwtVerify");

module.exports = app => {
	app.get("/checkTags/:text", jwtVerify, (req, res, next) => {
		checkIfExists(req, res);
	});

	app.get("/tags", jwtVerify, (req, res, next) => {
		getTagsByUser(req, res);
	});

	app.post("/tag/save", jwtVerify, (req, res, next) => {
		createTag(req, res);
	});

	app.delete("/tag/remove/:id", jwtVerify, (req, res, next) => {
		deleteTag(req, res);
	});
};
