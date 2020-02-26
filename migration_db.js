var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('project_db');

db.serialize(function() {
  db.run("CREATE TABLE if not exists user (id INT, dt TEXT)");
  db.run("CREATE TABLE if not exists user (id INT, dt TEXT)");
  db.run("CREATE TABLE if not exists user (id INT, dt TEXT)");
  db.run("CREATE TABLE if not exists user (id INT, dt TEXT)");
});

db.close();