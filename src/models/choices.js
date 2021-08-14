'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Choices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Choices.belongsTo(models.Questions)
    }
  };
  Choices.init({
    choice: DataTypes.STRING,
    QuestionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Choices',
  });
  return Choices;
};