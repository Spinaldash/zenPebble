'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    image: String,
    roomsNum: Number,
    rent: Number,
    sqft: Number,
    description: String,
    tenants: {type: Number, default: 0}
});

module.exports = mongoose.model('Apartment', apartmentSchema);
