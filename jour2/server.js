const express = require('express');
const bodyParder = require('body-parser');
const routes = require('./routes');
const exp = require('constants');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Utilisation des routes définies dans routes.js
app.use('/api', routes);

module.exports = app;