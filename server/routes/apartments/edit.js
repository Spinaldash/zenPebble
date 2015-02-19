'use strict';

var setActive = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');


module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId}, function(err, apartment) {
      var sqft = ['1500', '1750', '2000', '2250', '2500'];
      reply.view('templates/apartments/edit', {path: '/apartments', setActive:setActive, apartment:apartment, sqft:sqft});
    });
  }
};
