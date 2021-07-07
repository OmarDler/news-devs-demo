const developmentConfig ={
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migration:{
      tableName: 'knex_migrations',
      directory: './migrations'
  }
}
const db = require('knex')({
    ...developmentConfig
  });
  
  module.exports = {
    db,
    developmentConfig
  };