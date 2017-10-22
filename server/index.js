const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Server setup
const port = process.env.PORT || 3000;
// app.set('port', port);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client')));

// app.get('/', function(req, res) {
//         // 
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
})