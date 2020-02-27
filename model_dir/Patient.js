const { Sequelize, connectDb } = require('./Model');

const Patient = connectDb.define('patient', {
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
    specializare: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Patient.associate = function (models) { // 1:N
    models.Task.belongsTo(models.Medic, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

Medic.sync({ force: true });

module.exports = Medic;