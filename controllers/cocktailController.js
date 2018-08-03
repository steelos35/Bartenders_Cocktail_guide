
const db = require('../models/cocktailsdb');

module.exports = {
  index(req, res, next) {
    db.findAll()
      .then((cocktails) => {
        res.locals.cocktail = cocktails;
        // res.json(cocktails)
        next();
      })
      .catch((err) => {
        next(err);
      });
  },
};
