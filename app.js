var express = require('express');
const app = express()
const hostname = '0.0.0.0';
const port = 6060;




app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
})
