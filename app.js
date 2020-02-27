const {server} = require('./settings');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

routes(app);

app.listen(server.port, function () {
  console.log(`Server running at http://${server.hostname}:${server.port}/`);
})


