'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    name: {type: String, required: true}, //required: true means it must have a name to be saved into the database
    image: String,
    age: Number,
    gender: String,
    email: String,
    apartment: [{type: mongoose.Schema.ObjectId, ref:'Apartment'}] // Adds an Apartment Properity, which is an array of ObjectIds. ref: means the ID's must be monsters.
});

module.exports = mongoose.model('Client', clientSchema);
