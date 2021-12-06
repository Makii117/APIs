const Sequelize = require("sequelize");
const sequelize = require("../util/datbase");
const shoppingList = sequelize.define(
  "shoppingList",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    updatedAt: false,
    createdAt: "time_added",
  }
);

module.exports = shoppingList;
