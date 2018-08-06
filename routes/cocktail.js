
const express = require('express');
const cocktail = require('../controllers/cocktailController.js');
const views = require('../controllers/viewsController.js');

const router = express.Router();


router.route('/')
  .get(cocktail.index, views.showAll)
  .post(cocktail.createOne, views.sendCreateCocktail);


router.route('/:id')
  .get(cocktail.oneCocktail, views.showOne)
  .put(cocktail.update)
  .delete(cocktail.delete, views.deleteCocktail);


router.route('/:id/edit')
  .get(cocktail.edit, views.editCocktail);

module.exports = router;
