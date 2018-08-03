
// connections
const pgp = require('pg-promise')();
const config = require('../config/dbConfig.js');

const db = pgp(config);

//  SQL queries to the database
module.exports = {
  // Insert SQL Queries for database
  findAll() {
    return db.many(`
   SELECT * FROM cocktail
   `);
  },

};
