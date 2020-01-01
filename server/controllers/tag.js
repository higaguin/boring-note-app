let tagController = {};
const models = require("../models");

tagController.getTagsByUser = (req, res) => {
  models.Tag.find({ user: req.body.userId }, function(err, tags) {
    if (err)
      return res
        .status(500)
        .send("There was a problem obtaining the data from the database");
    return res.status(200).send(tags);
  });
};

tagController.createTag = (req, res) => {
  models.Tag.create(
    {
      title: req.body.title,
      user: req.body.user
    },
    function(err, tag) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      return res.status(201).send(tag);
    }
  );
};

tagController.deleteTag = (req, res) => {
  models.Tag.findByIdAndRemove(req.params.id, (err, tag) => {
    if (err)
      return res
        .status(500)
        .send("There was a problem deleting the information to the database.");
    return res.status(200).send(`${tag.title} was deleted`);
  });
};

module.exports = tagController;
