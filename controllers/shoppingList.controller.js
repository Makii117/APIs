const shoppingList = require("../models/shoppingList.model");
const Op = require("sequelize").Op;
// Create and Save a new item to the list
exports.create = (req, res) => {
  //Validate the request
  if (!req.body.name) {
    res.status(400).send({ message: "Can't be empty" });
    return;
  }
  const listItem = {
    name: req.body.name,
    quantity: req.body.quantity,
  };
  shoppingList
    .create(listItem)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Unknown error occured while creating list item",
      });
    });
};

// Retrieve all items from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  shoppingList
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items.",
      });
    });
};

// Find a single item with an id/name
exports.findOne = (req, res) => {
  const id = req.params.id;

  shoppingList
    .findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find item with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving item with id=" + id,
      });
    });
};

// Update an item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  shoppingList
    .update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Item updated successfully" });
      } else {
        res.send({ message: `Cant update item with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating item" });
    });
};

// Delete an item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  shoppingList
    .destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Item deleted successfully" });
      } else {
        res.send({ message: `Cant delete item with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting item" });
    });
};

// Delete all items from the database.
exports.deleteAll = (req, res) => {};
