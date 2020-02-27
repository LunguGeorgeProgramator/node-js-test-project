const ClinicController = {
    "index" : function (res) {
        return res.render('index');
    },
    "create" : function (res) {
        return res.render('create_clinic');
    }
};

module.exports = ClinicController;