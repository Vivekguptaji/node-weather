const express = require("express");

const router = express.Router();

router.use("/about", (req, res, next) => {
  res.render("about", {
    pageTitle: "Welcome",
    tag: "Hello on HBS",
  });
});

router.use("/weather", (req, res, next) => {
  res.json({ name: "Vivek Gupta" });
});

router.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "Welcome",
    tag: "Hello on HBS",
  });
});

router.get("*", (req, res) => {
  res.render("404", {
    pageTitle: "Welcome",
    tag: "Hello on HBS",
  });
});
module.exports = router;
