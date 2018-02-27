'use strict';
module.exports = (sequelize, DataTypes) => {
  var notes = sequelize.define('notes', {
    noteKey: DataTypes.INTEGER,
    noteTitle: DataTypes.STRING,
    noteText: DataTypes.STRING
  }, {});
  notes.associate = function(models) {
    // associations can be defined here
  };
  return notes;
};