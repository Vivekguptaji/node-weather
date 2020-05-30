const request = require("request");
const chalk = require("chalk");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const multer = require("multer");

const router = require("./router");
const app = express();
app.set("view engine", "hbs");
app.use(express.json());

hbs.registerPartials("./template");
app.use(express.static("public"));

const diskstore = multer.diskStorage({
  destination: (re, file, cb) => {
    console.log("path", __dirname + "/images");
    cb(null, __dirname + "/images");
  },
  filename: (ex, file, cb) => {
    cb(null, Math.random().toString() + file.originalname);
  },
});

app.use(
  multer({
    storage: diskstore,
    limits: {
      fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.endsWith(".PNG")) {
        return cb(new Error("please upload png"));
      }
      cb(undefined, true);
    },
  }).single("upload")
);
app.use((err, req, res, next) => {
  if (err) {
    console.log("my ", err.message);
    res.status(404).json({ error: err.message });
  }
});
app.use(router);

app.listen(3000, () => {
  console.log(chalk.white.inverse("server is running on 3000"));
});
