const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express ();
app.use(cors());

app.use(bodyParser.json());
app.use('/', routes);

// Adding middlewear
app.use((err, req, res, next) => {
    console.log('ERROR FROM MIDDLEWARE ', err);
    res.json(err);
});

module.exports = app;
