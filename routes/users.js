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

module.exports = router;
