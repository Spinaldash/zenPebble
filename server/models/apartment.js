'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    image: String,
    roomsNum: Number,
    rent: Number,
    sqft: Number,
    description: String,
    tenants: [{type: mongoose.Schema.ObjectId, ref:'Client'}]
});

module.exports = mongoose.model('Apartment', apartmentSchema);
