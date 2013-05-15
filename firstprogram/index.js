var Person = require('../models/personModel');

exports = module.exports = function (server) {
    'use strict';

    /**
     * The default route for this application: /
     * @param {Object} req the HTTP request object
     * @param {Object} res the HTTP response object
     */
    server.get('/', function (req, res) {
        var model = { recipient: Person.create('world') };
        res.render('index', model);
    });

    server.post('/resultvalue', function(req, res) {
    var n1=parseInt(req.body.x1,10), n2=parseInt(req.body.x2,10), n3=n1+n2;
    var model = {"result":n3};
res.render('result',model);

}

    )


};
