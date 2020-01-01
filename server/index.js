const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const tagRoutes = require("./routes/tagRoutes");
const passport = require("passport");
require("./services/passport");
//ds

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());
authRoutes(app);
tagRoutes(app);
noteRoutes(app);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("conectado");
});

app.get("/", (req, res) => {
  res.send({ hi: "miaus" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
