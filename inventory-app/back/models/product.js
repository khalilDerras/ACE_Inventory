const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product = new Schema({
    nom: {
        type: String
    },
    reference: {
        type: String
    },
    emplacement: {
        type: String
    },
    photo: {
        type: String
    },
    prix: {
        type: Number
    },
    quantity: {
        type: Number
    },
    prixDach: {
        type: Number
    },
    q: {
        type: Number
    }
});
module.exports = mongoose.model('Product', Product);