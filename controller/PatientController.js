const { Patient, Medic, MedicPatient } = require('../models');
module.exports = {
    "index": function (res) {
        return Patient.findAll({
            include: [{
                model: Medic,
                as: 'medic',
                required: false,
                through: {
                    model: MedicPatient,
                    as: 'MedicPatients',
                    attributes: ['boala', 'tratament'],
                }
            }]
        }).then(function (patients) {
            return res.render('patient/index', {
                patients: patients
            });
        });
    },
    "create": function (res) {
        Medic.findAll({
            order: [['id', 'ASC']]
        }).then(function (medics) {
            return res.render('patient/form', {
                patient: null,
                method: 'create',
                medics: medics
            });
        });
    },
    "store": function (req, res) {
        Patient.create({
            nume: req.body.nume,
            adresa: req.body.adresa
        });
        return res.redirect('/pacienti');
    },
    "edit": function (req, res) {
        Patient.findOne({
            where: { id: req.params.id }
        }).then(function (patient) {
            Medic.findAll({
                order: [['id', 'ASC']]
            }).then(function (medics) {
                return res.render('patient/form', {
                    method: 'edit',
                    patient: patient,
                    medics: medics
                });
            });
        });
    },
    "update": function (req, res) {
        Patient.update(
            {
                nume: req.body.nume,
                adresa: req.body.adresa
            }, {
            where: {
                id: req.params.id
            }
        });
        Patient.findOne({
            where: { id: req.params.id }
        }).then(function (patient) {
            return res.redirect('/pacient/'+(patient.id)+'/vizualizare');
        });
    },
    "show": function (req, res) {
        Patient.findOne({
            where: { id: req.params.id },
            include: [{
                model: Medic,
                as: 'medic',
                required: false,
                through: {
                    // This block of code allows you to retrieve the properties of the join table
                    model: MedicPatient,
                    as: 'MedicPatients',
                    attributes: ['id', 'boala', 'tratament'],
                }
            }]
        }).then(function (patient) {
            return res.render('patient/show', {
                patient: patient,
                method: 'show'
            });
        });
    },
    "delete": function (req, res) {
        Patient.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.redirect('/pacienti');
    },
    "addTreatment": function (req, res) {
        Patient.findOne({
            where: { id: req.params.id }
        }).then(function (patient) {
            Medic.findAll({
                order: [['id', 'ASC']]
            }).then(function (medics) {
                return res.render('patient/treatment_form', {
                    patient: patient,
                    medics: medics,
                    method: 'create_tratament'
                });
            });
        });
    },
    "storeTreatment": function(req, res){
        MedicPatient.create({
            medicId: req.body.medicId,
            patientId: req.body.patientId,
            boala: req.body.boala,
            tratament: req.body.tratament
        });
        return res.redirect('/pacient/'+(req.body.patientId)+'/vizualizare');
    },
    "editTreatment": function(req, res){
        Patient.findOne({
            include: [{
                model: Medic,
                as: 'medic',
                required: false,
                through: {
                    model: MedicPatient,
                    as: 'MedicPatients',
                    attributes: ['id', 'boala', 'tratament'],
                    where: { id: req.params.id },
                }
            }]
        }).then(function (patient) {
            return res.render('patient/treatment_form', {
                patient: patient,
                method: 'update_treatment'
            });
        });
    },
    "updateTreatment": function(req, res){
        MedicPatient.update(
            {
                boala: req.body.boala,
                tratament: req.body.tratament
            }, {
            where: {
                id: req.body.relationId
            }
        });
        MedicPatient.findOne({
            where: { id: req.body.relationId }
        }).then(function(relation){
            return res.redirect('/pacient/'+(relation.patientId)+'/vizualizare');
        });
    },
    "deleteTreatment": function (req, res) {
        MedicPatient.findOne({
            where: { id: req.params.id }
        }).then(function(relation){
            MedicPatient.destroy({
                where: {
                    id: relation.id
                }
            });
            return res.redirect('/pacient/'+(relation.patientId)+'/vizualizare');
        });
    }
};