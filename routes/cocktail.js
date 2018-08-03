
const express = require('express');
const cocktail = require('../controllers/cocktailController.js');
const views = require('../controllers/viewsController.js');

const router = express.Router();

router.route('/')
  .get(cocktail.index, views.showAll);


// router.route('/:id')
// .get(cocktail.getOne, views.showOne)


module.exports = router;
