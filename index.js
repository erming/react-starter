const express = require("express");
const compression = require("compression");
const profile = require("response-time");
const config = require("./config");

const app = express();
const port = config.server.port;

app.use(compression());
app.use(profile());
app.use(express.static("public"));

app.get("/favicon.*", (req, res) => {
  res.sendStatus(204);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log("");
  console.log("Listening on http://localhost:" + port);
  console.log("Ctrl-c to stop");
  console.log("");
});
