'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Questions}) {
      this.hasMany(Questions, {
        foreignKey: 'topic_id'
      });
    }
  }
  Topics.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topics',
  });
  return Topics;
};