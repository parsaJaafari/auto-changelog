const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("hello from the server");
});

app.listen(4000, () => console.log("listening on port 3000"));

console.log("new log on server");

console.log("arbitary test log");
