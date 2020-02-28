const { Clinic, Medic } = require('../models');
module.exports = {
    "index": function (res) {

        return Medic.findAll({
            order: [['id', 'ASC']],
            include: [{
                model: Clinic,
                as: 'clinic'
            }]
        }).then(function (medics) {
            return res.render('medic/index', {
                medics: medics
            });
        });
    },
    "create": function (res) {
        Clinic.findAll({
            order: [['id', 'ASC']]
        }).then(function (clinics) {
            return res.render('medic/form', {
                medic: null,
                method: 'create',
                clinics: clinics
            });
        });
    },
    "store": function (req, res) {
        Medic.create({
            nume: req.body.nume,
            specializare: req.body.specializare,
            clinicId: req.body.clinicId
        });
        return res.redirect('/medici');
    },
    "edit": function (req, res) {
        Medic.findOne({
            where: { id: req.params.id }
        }).then(function (medic) {
            Clinic.findAll({
                order: [['id', 'ASC']]
            }).then(function (clinics) {
                return res.render('medic/form', {
                    medic: medic,
                    method: 'edit',
                    clinics: clinics
                });
            });

        });
    },
    "update": function (req, res) {
        Medic.update(
            {
                nume: req.body.nume,
                specializare: req.body.specializare,
                clinicId: req.body.clinicId
            }, {
            where: {
                id: req.params.id
            }
        });
        Medic.findOne({
            where: { id: req.params.id }
        }).then(function (medic) {
            return res.redirect('/medic/' + (medic.id) + '/vizualizare');
        });
    },
    "show": function (req, res) {
        Medic.findOne({
            where: { id: req.params.id },
            include: [{
                model: Clinic,
                as: 'clinic'
            }]
        }).then(function (medic) {
            return res.render('medic/show', {
                medic: medic,
                method: 'show'
            });
        });
    },
    "delete": function (req, res) {
        Medic.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.redirect('/medici');
    },
};