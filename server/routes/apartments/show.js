'use strict';

var setActive = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId}, function(err, apartment) {
      Client.find(function(err, clients) {
        reply.view('templates/apartments/show', {path: '/apartments', setActive:setActive, apartment:apartment, clients:clients});
      });
    });
  }
};
