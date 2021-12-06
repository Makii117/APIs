const userModel = require("../models/user.model");

exports.create = (req, res) => {
  //Validate the request
  if (!req.body.title) {
    res.status(400).send({ message: "Can't be empty" });
    return;
  }
  const user = {};
};
