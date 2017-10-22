const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Server setup
const port = '3000';
app.set('port', port);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../client')));

app.listen(3000, function () {
    console.log(`Listening on port $(port)`);
})