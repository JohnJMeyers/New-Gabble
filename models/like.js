'use strict';
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    gabId: DataTypes.INTEGER
  }, {});

//   Like.associate = function(models){
//  Like.belongsTo(models.User, {as: 'likeUser', foreignKey: 'userId'})
// }
// Like.associate = function(models){
//  Like.belongsTo(models.Gab, {as: 'likeGab', foreignKey: 'gabId'})
// }
  return Like;
};
