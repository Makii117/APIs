const shoppingList = require("../controllers/shoppingList.controller");
var router = require("express").Router();
//create item
router.post("/", shoppingList.create);
//get all items
router.get("/", shoppingList.findAll);
//get by id
router.get("/:id", shoppingList.findOne);
//update item by id
router.put("/:id", shoppingList.update);
//delete item by id
router.delete("/:id", shoppingList.delete);

module.exports = router;
