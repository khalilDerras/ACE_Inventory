var express = require('express');
var factureRoutes = express.Router();
let Facture = require('../models/facture');

factureRoutes.route('/').get(function(req, res) {
    Facture.find(function(err, factures) {
        if (err) {
            console.log(err);
        } else {
            res.json(factures);
        }
    });
});
factureRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Facture.findById(id, function(err, facture) {
        res.json(facture);
    });
});
factureRoutes.route('/add').post(function(req, res) {
    let facture = new Facture(req.body);
    facture.save()
        .then(facture => {
            res.status(200).json({'facture': 'facture added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new facture failed');
        });
});
factureRoutes.route('/delete/:id').post(function(req, res) {
    Facture.findByIdAndDelete(req.params.id, function(err, facture) {
            if (err) 
                res.status(404).send("Delete Not Possible");
            else
                res.json("facture deleted");
    });
});
factureRoutes.route('/update/:id').post(function(req, res) {
    Facture.findById(req.params.id, function(err, facture) {
        if (!facture)
            res.status(404).send("data is not found");
        else
            facture.cart = req.body.cart;
            facture.total = req.body.total;
            facture.save().then(facture => {
                res.json('facture updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
module.exports = factureRoutes;