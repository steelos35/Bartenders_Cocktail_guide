
const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
	// custom database name
	database: 'thundercats_development', 
	port: 5432,
	host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
	// Heroku will add this
	db = pgp(process.env.DATABASE_URL); 
}

module.exports = db;





// module.exports = process.env.DATABASE_URL || {
//   host: process.env.DB_HOST || 'localhost',
//   port: process.env.DB_PORT || 5432,
//   database: process.env.DB_NAME || 'cocktail_db',

// };
