const ClinicController = require('./controller/ClinicController');
const MedicController = require('./controller/MedicController');
const PatientController = require('./controller/PatientController');
module.exports = function(app) {
        /// clinic routes
        app.get('/', function (req, res) { 
            return ClinicController.index(res);
        });
    
        app.get('/clinica/creaza', function (req, res) { 
            return ClinicController.create(res);
        })
    
        app.post('/clinica/store', function (req, res) { 
            return ClinicController.store(req, res);
        })
    
        app.get('/clinica/:id/editare', function (req, res) { 
            return ClinicController.edit(req, res);
        })
    
        app.post('/clinica/:id/update', function (req, res) { 
            return ClinicController.update(req, res);
        })
    
        app.get('/clinica/:id/vizualizare', function (req, res) { 
            return ClinicController.show(req, res);
        })
    
        app.get('/clinica/:id/delete', function (req, res) { 
            return ClinicController.delete(req, res);
        })
        /// medic routes
        app.get('/medici', function (req, res) { 
            return MedicController.index(res);
        });
    
        app.get('/medic/creaza', function (req, res) { 
            return MedicController.create(res);
        })
    
        app.post('/medic/store', function (req, res) { 
            return MedicController.store(req, res);
        })
    
        app.get('/medic/:id/editare', function (req, res) { 
            return MedicController.edit(req, res);
        })
    
        app.post('/medic/:id/update', function (req, res) { 
            return MedicController.update(req, res);
        })
    
        app.get('/medic/:id/vizualizare', function (req, res) { 
            return MedicController.show(req, res);
        })
    
        app.get('/medic/:id/delete', function (req, res) { 
            return MedicController.delete(req, res);
        })
    
        /// patient routes
        app.get('/pacienti', function (req, res) { 
            return PatientController.index(res);
        });
    
        app.get('/pacient/creaza', function (req, res) { 
            return PatientController.create(res);
        })
    
        app.post('/pacient/store', function (req, res) { 
            return PatientController.store(req, res);
        })
    
        app.get('/pacient/:id/editare', function (req, res) { 
            return PatientController.edit(req, res);
        })
    
        app.post('/pacient/:id/update', function (req, res) { 
            return PatientController.update(req, res);
        })
    
        app.get('/pacient/:id/vizualizare', function (req, res) { 
            return PatientController.show(req, res);
        })
    
        app.get('/pacient/:id/delete', function (req, res) { 
            return PatientController.delete(req, res);
        })

        /// treatment routes
        app.get('/pacient/:id/tratament', function (req, res) { 
            return PatientController.addTreatment(req, res);
        })

        app.post('/pacient/store_tratament', function (req, res) { 
            return PatientController.storeTreatment(req, res);
        })

        app.get('/pacient/:id/editeaza_tratament', function (req, res) { 
            return PatientController.editTreatment(req, res);
        })

        app.post('/pacient/update_tratament', function (req, res) { 
            return PatientController.updateTreatment(req, res);
        })

        app.get('/pacient/:id/delete_tratament', function (req, res) { 
            return PatientController.deleteTreatment(req, res);
        })


        return app;
    };