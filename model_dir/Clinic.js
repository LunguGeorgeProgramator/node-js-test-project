const { Sequelize, connectDb } = require('./Model');

const Clinic = connectDb.define('clinic', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    locatie: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Clinic.associate = function (models) { // N:1
    models.User.hasMany(models.Medic);
};

module.exports = Clinic;