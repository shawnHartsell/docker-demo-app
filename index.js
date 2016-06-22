'use strict';
const express = require('express');
const mustacheExpress = require('mustache-express');
const middleware = require('./middleware');
const bodyParser = require('body-parser');
const neDbController = require('./nedb-controller');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/client/html'));
app.use(express.static(path.join(__dirname, '/client/js')));

app.get(['/', '/hai'], (req, res) => {
  res.render('hello-docker');
});

//nedb demo stuff
app.use('/nedb', neDbController);

app.use(middleware.errorMiddleware);

app.listen(9000);
console.log('app listening on port 9000');
