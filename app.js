const {server} = require('./settings');
const express = require('express');
const routes = require('./routes');
const Clinic = require('./model_dir/Clinic');
const Medic = require('./model_dir/Medic');
// const pacient = require('./model_dir/Patient'); ???

const app = express()

app.set('view engine', 'ejs');
routes.routes(app);

app.listen(server.port, function () {
  console.log(`Server running at http://${server.hostname}:${server.port}/`);
})


