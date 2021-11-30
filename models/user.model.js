const Sequelize = require("sequelize");
const sequelize = require("../util/datbase");
const User = Sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.string,
    allowNull: false,
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
});

module.exports = User;
