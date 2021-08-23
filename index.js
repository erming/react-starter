require("dotenv").config();

const express = require("express");
const compression = require("compression");
const profile = require("response-time");

const {
  HOST,
  PORT,
} = process.env;

const app = express();

app.use(compression());
app.use(profile());
app.use(express.static("public"));

app.get("/favicon.*", (req, res) => {
  res.sendStatus(204);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log("");
  console.log("Listening on http://127.0.0.1:" + PORT);
  console.log("Ctrl-c to stop");
  console.log("");
});
