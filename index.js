var express = require("express");
var app = express();

app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("app listening on port 4000");
});

var compliments = require("./controller/compliments.js");

app.get("/", compliments.index);

app.get("/:name", compliments.index);
