const { config } = require('./../config/config');


const USER_MYSQL = encodeURIComponent(config.dbUsermysql);
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Para BD postgres
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// Para BD Mysql
//const URI = `mysql://${USER_MYSQL}:${PASSWORD}@${config.dbHost}:${config.dbPortMysql}/${config.dbName}`


module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}
