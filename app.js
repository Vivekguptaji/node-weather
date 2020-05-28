const request = require("request");
const chalk = require("chalk");
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const router = require("./router");

const app = express();
app.set("view engine", "hbs");

hbs.registerPartials("./template");
app.use(express.static("public"));

app.use(router);

app.listen(3000, () => {
  console.log(chalk.white.inverse("server is running on 3000"));
});
