const {db} = require('../settings');
const Sequelize = require('sequelize');
module.exports = {
    connectDb: new Sequelize({
        dialect: db.dialect,
        storage: db.storage
      }),
    Sequelize
};