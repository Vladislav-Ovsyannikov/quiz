'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topics }) {
      this.belongsTo(Topics, {
        foreignKey: 'topic_id',
      });
    }
  }
  Questions.init(
    {
      question: DataTypes.STRING,
      topic_id: DataTypes.INTEGER,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Questions',
    }
  );
  return Questions;
};
