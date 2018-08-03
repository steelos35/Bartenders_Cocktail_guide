
module.exports = {

  showAll(req, res) {
    res.render('cocktails/showall', {
      data: res.locals.cocktail,
    });
  },
};
