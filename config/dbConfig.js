const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('checkinman','root',null,{ 
  host:'localhost', 
  dialect:'mysql' 
});
module.exports = sequelize;