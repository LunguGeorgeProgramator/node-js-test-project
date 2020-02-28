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

// difine patient model
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
	adresa: {
		type: Sequelize.STRING,
		allowNull: true
	}
});

const MedicPatient = connectDb.define('MedicPatients', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	medicId: {
		type: Sequelize.INTEGER,
		references: {
			model: Medic,
			key: 'id'
		}
	},
	patientId: {
		type: Sequelize.INTEGER,
		references: {
			model: Patient,
			key: 'id'
		}
	},
	boala: {
		type: Sequelize.STRING,
		allowNull: false
	},
	tratament: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

// relation 1:N
Clinic.hasMany(Medic, {
	onDelete: 'SET NULL',
	onUpdate: 'CASCADE'
});
Medic.belongsTo(Clinic, {
	foreignKey: 'clinicId'
});

// relation N:N
Medic.belongsToMany(Patient, { 
	through: 'MedicPatients',
	as: 'patient',
	foreignKey: 'medicId',
    otherKey: 'patientId'
 });
Patient.belongsToMany(Medic, { 
	through: 'MedicPatients',
	as: 'medic',
    foreignKey: 'patientId',
    otherKey: 'medicId'
 });

module.exports = { Clinic, Medic, Patient, MedicPatient };