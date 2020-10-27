const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let P = new Schema({
    prodId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'product'
    },
    qte : {
        type: Number
    }
});
let Facture = new Schema({
    cart : {
        type:[P]
    },
    total : {
       type:Number 
    },
    time : { type : Date, default: Date.now } 
});
module.exports = mongoose.model('Facture', Facture);