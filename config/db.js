const Sequelize = require('sequelize');

const sequelize = new Sequelize('system-test', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases:false,
  dialectOptions: {
    charset:'utf8',
    collate:'utf8_unicode_ci',
    supportBigNumbers:true,
    bigNumberStrings:true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire:30000
  },
  timezone: '+08:00' //东八时区，不设置时区，时间不正确
});
module.exports = {sequelize}