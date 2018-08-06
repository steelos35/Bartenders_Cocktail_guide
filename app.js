// node modules required
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('./routes/cocktail.js');
// localhost PORT
const PORT = process.env.PORT || 3000;
// call express
const app = express();

// set views paths
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// required packages
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/cocktails', router);


// port is listening and server is up and running
app.listen(PORT, () => {
  console.log(`Cocktail Server up and listening on port ${PORT} in ${app.get('env')}`);//eslint-disable-line
});
