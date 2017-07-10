'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gab = sequelize.define('Gab', {
    text: DataTypes.TEXT,
    userId: DataTypes.STRING
  }, {});

  // Gab.associate = function(models){
  //  Gab.hasMany(models.Like, {as: 'gabLike' foreignKey: 'gabId'})
  // }
  Gab.associate = function(models){
   Gab.belongsTo(models.User, {as: 'gabUser', foreignKey: 'userId'})
  }

  return Gab;
};
