
const express = require('express');

const app = express();
const port = 4000;


// our routes
const routes = require('./routes.js');
app.use('/', routes);

// view configuration
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.listen(PORT, () => console.log("Port 4000 is listened"));