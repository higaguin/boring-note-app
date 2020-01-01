const {
  getNotesByUser,
  createNote,
  updateNote,
  deleteNote
} = require("../controllers/note");

const jwtVerify = require("../helpers/jwtVerify");

module.exports = app => {
  app.get("/notes", jwtVerify, (req, res, next) => {
    getNotesByUser(req, res);
  });

  app.post("/note/save", jwtVerify, (req, res) => {
    createNote(req, res);
  });

  app.put("/note/edit/:id", jwtVerify, (req, res) => {
    updateNote(req, res);
  });

  app.delete("/note/remove/:id", jwtVerify, (req, res) => {
    deleteNote(req, res);
  });
};
