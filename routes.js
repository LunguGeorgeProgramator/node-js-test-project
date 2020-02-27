const ClinicController = require('./controller/ClinicController');

function routes(app){
    
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

    // app.get('/remove', function (req, res) {
    //     return QuizzesController.remove(res, req);
    // })

    // app.get('/show/:id', function (req, res) { 
    //     return QuizzesController.show(res, req);
    // })

    return app;
}

module.exports = {routes};