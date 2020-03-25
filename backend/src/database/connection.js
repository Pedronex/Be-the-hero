const knex = require('knex');
const configuration = require('../../knexfile');
/*
  SQL: MySQL, SQLite, PostgreSQL, Oracle,Microsoft SQL Server.
  NoSQL: MongoDB, CouchDB, etc.
*/
/**
  Driver: Select * from users;
  Query Builder: table('users').select('*').where();
 */
const connection = knex(configuration.development);

module.exports = connection;