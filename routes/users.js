const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ message: error });
    });
});

router.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

module.exports = router;
