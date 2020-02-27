const Medic = require('../model_dir/Medic');
const Clinic = require('../model_dir/Clinic');
module.exports = {
    // "index": function (res) {
    //     return Clinic.findAll({
    //         order: [['id', 'DESC']]
    //     }).then(function (clinics) {
    //         return res.render('clinic/index', {
    //             clinics: clinics
    //         });
    //     });
    // },
    "create": function (res) {
        Clinic.findAll({
            order: [['id', 'DESC']]
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
            locatie: req.body.locatie
        });
        return res.redirect('/');
    },
    // "edit": function (req, res) {
    //     Clinic.findOne({
    //         where: { id: req.params.id }
    //     }).then(function (clinic) {
    //         return res.render('clinic/form', {
    //             clinic: clinic,
    //             method: 'edit'
    //         });
    //     });
    // },
    // "update": function (req, res) {
    //     Clinic.update(
    //         {
    //             nume: req.body.nume,
    //             locatie: req.body.locatie
    //         }, {
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     Clinic.findOne({
    //         where: { id: req.params.id }
    //     }).then(function (clinic) {
    //         return res.redirect('/clinica/'+(clinic.id)+'/vizualizare');
    //     });
    // },
    // "show": function (req, res) {
    //     Clinic.findOne({
    //         where: { id: req.params.id }
    //     }).then(function (clinic) {
    //         return res.render('clinic/show', {
    //             clinic: clinic,
    //             method: 'show'
    //         });
    //     });
    // },
    // "delete": function (req, res) {
    //     Clinic.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     return res.redirect('/');
    // },
};