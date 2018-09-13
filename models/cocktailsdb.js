
// connections
const pgp = require('pg-promise')();

const config = require('../config/dbConfig.js');

const db = pgp(config);

//  SQL queries to the database
module.exports = {
  // find all cocktails
  showAll() {
    return db.many(`
   SELECT * FROM cocktails
   `);
  },

  //   Find one cocktail
  getOne(id) {
    return db.one(`
        SELECT * FROM cocktails
        WHERE id = $1
        `, id);
  },

  // create one cocktail
  createCocktail(cocktail) {
    return db.one(`
          INSERT INTO cocktails
          (name, ingredient_id, glass, comments)
          VALUES ($/name/, $/ingredient_id/, $/glass, $/comments/)
          RETURNING *`, cocktail);
  },

  //   update a cocktail
  updateCocktail(cocktail) {
    return db.one(`
    UPDATE cocktails
    SET name = $1, 
    ingredient_id = $2,
    glass = $3,
    comments = $4
    RETURNING *`, [cocktail.name, cocktail.ingredient_id, cocktail.glass, cocktail.comments]);
  },

  deleteCocktail(id) {
    return db.one(`
    DELETE FROM cocktails
    WHERE id = $1`, id);
  },

};
