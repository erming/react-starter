require("dotenv").config();

const fastify = require("fastify");
const path = require("path");
const compress = require("fastify-compress");
const etag = require("fastify-etag");
const static = require("fastify-static");

const {
  HOST,
  PORT,
} = process.env;

const app = fastify();

app.register(compress, {
  encodings: ["gzip"],
  threshold: 2048
});
app.register(etag);
app.register(static, {
  root: path.join(__dirname, "/public")
});

app.get("/favicon.*", (req, res) => {
  res.code(204).send();
});

app.listen({
  host: HOST,
  port: PORT,
}, () => {
  console.log("");
  console.log("Listening on http://127.0.0.1:" + PORT);
  console.log("Ctrl-c to stop");
  console.log("");
});
