var express = require('express');
var productRoutes = express.Router();
let Product = require('../models/product');

productRoutes.route('/').get(function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });
});
productRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
});
productRoutes.route('/add').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});
productRoutes.route('/delete/:id').post(function(req, res) {
    Product.findByIdAndDelete(req.params.id, function(err, product) {
            if (err) 
                res.status(404).send("Delete Not Possible");
            else
                res.json("product deleted");
    });
});
productRoutes.route('/update/:id').post(function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else
            product.nom = req.body.nom;
            product.reference = req.body.reference;
            product.emplacement = req.body.emplacement;
            product.photo = req.body.photo;
            product.prix = req.body.prix;
            product.quantity = req.body.quantity;
            product.prixDach = req.body.prixDach;
            product.save().then(product => {
                res.json('product updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
module.exports = productRoutes;