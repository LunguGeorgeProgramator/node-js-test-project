const express = require('express');
const routes = require('./routes');
require('./migration_db');

// new dataBase();

const app = express()
const hostname = '0.0.0.0';
const port = 6060;

app.set('view engine', 'ejs');
routes.routes(app);

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
})


