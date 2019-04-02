const express = require ('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');
const habitats = require('./routes/habitats');
const lives = require('./routes/lives');

const app = express ();

app.use(bodyParser.json());

app.use('/monsters', monsters);
app.use('/habitats', habitats);
app.use('/lives', lives);

// Adding middlewear
app.use((err, req, res, next) => {
    console.log('ERROR FROM MIDDLEWARE ', err);
    res.json(err);
});

module.exports = app;
