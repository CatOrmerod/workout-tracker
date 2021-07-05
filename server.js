const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("Successfully connected.");
// });

// connection.on("error", (err) => {
//   console.log("Error Log" + err);
// });

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
