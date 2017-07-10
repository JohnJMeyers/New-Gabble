'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.associate = function(models){
    User.hasMany(models.Gab, {as: 'userGab', foreignKey: 'userId'})
 }
//   User.associate = function(models){
//     User.hasMany(models.Like, {as: 'userLike', foreignKey: 'userId'})
// }
  return User;
};
