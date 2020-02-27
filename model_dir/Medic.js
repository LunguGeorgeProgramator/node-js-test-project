const { Sequelize, connectDb } = require('./Model');

const Medic = connectDb.define('medic', {
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

Medic.associate = function (models) { // 1:N
    models.Task.belongsTo(models.Clinic, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

Medic.sync({ force: true });

module.exports = Medic;