module.exports = {

  showAll(req, res) {
    res.render('showAll');
  },

  showOne(req, res) {
    res.render('one');
  },

  sendCreateCocktail(req, res) {
    res.render('showAll');
  },

  editCocktail(req, res) {
    res.render('edit');
  },

  deleteCocktail(req, res) {
    res.redirect('showAll');
  },


  // end of module export
};
