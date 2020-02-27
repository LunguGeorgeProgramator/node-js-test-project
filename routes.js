const ClinicController = require('./controller/ClinicController');

function routes(app){
    
    app.get('/', function (req, res) { 
        return ClinicController.index(res);
    });

    app.get('/clinica/creaza', function (req, res) { 
        return ClinicController.create(res);
    })

    // app.post('/', function (req, res) { // set post request for action link host+ '/'
    //     return QuizzesController.store(res, req);
    // })

    // app.get('/remove', function (req, res) {
    //     return QuizzesController.remove(res, req);
    // })

    // app.get('/show/:id', function (req, res) { 
    //     return QuizzesController.show(res, req);
    // })

    return app;
}

module.exports = {routes};