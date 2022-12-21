'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Category, {
        foreignKey: 'category',
      })
    }
  }
  Book.init({
    category: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    image: DataTypes.TEXT,
    publishDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};