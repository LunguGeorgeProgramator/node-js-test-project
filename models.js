const { db } = require('./settings');
const Sequelize = require('sequelize');

const connectDb = new Sequelize({
	dialect: db.dialect,
	storage: db.storage
});

// define clinic model
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

// define medic model
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
	},
});

// relation 1:N
Clinic.hasMany(Medic, {
	onDelete: 'SET NULL',
	onUpdate: 'CASCADE'
});
Medic.belongsTo(Clinic, {
	foreignKey: 'clinicId'
});

module.exports = { Clinic, Medic };