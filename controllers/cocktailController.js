
const db = require('../models/cocktailsdb');

module.exports = {

  // get all cocktails promise
  index(req, res, next) {
    db.showAll()
      .then((cocktails) => {
        res.locals.cocktail = cocktails;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

  // get one cocktail middleware
  oneCocktail(req, res, next) {
    db.getOne(req.params.id)
      .then((cocktails) => {
        res.locals.cocktail = cocktails;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

  // create a cocktail middleware
  createOne(req, res, next) {
    const {
      name, ingredient_id, glass, comments,
    } = req.body;
    db.createCocktail({
      name, ingredient_id, glass, comments,
    })
      .then((cocktails) => {
        res.redirect('showAll');
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

  // edit a cocktail
  edit(req, res, next) {
    db.getOne(req.params.id)
      .then((cocktails) => {
        res.locals.cocktail = cocktails;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

  // update cocktail
  update(req, res, next) {
    req.body.id = req.params.id;
    const {
      id, name, ingredient_id, glass, comments,
    } = req.body;
    db.updateCocktail({
      id, name, ingredient_id, glass, comments,
    })
      .then(() => {
        res.redirect(`cocktails/${cocktail.id}`);
      })
      .catch((err) => {
        next(err);
      });
  },

  // delete cocktail

  delete(req, res, next) {
    db.deleteCocktail(req.params.id)
      .then(() => {
        res.redirect('/cocktails');
      })
      .catch((err) => {
        next(err);
      });
  },


};
