const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

//const USER = encodeURIComponent(config.dbUser);
const USER_MYSQL = encodeURIComponent(config.dbUsermysql);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Para BD postgres
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// Para BD Mysql
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const URI = `mysql://${USER_MYSQL}:${PASSWORD}@${config.dbHost}:${config.dbPortMysql}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  // para BD Postgres
  //dialect: 'postgres',
  // para BD mysql
  //dialect: 'mysql',
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
