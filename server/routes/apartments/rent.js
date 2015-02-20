'use strict';

var Apartment = require('../../models/apartment');
var Client = require('../../models/client');


module.exports = {
  handler: function(request, reply) {
    Apartment.findById(request.params.apartmentId, function(err, apartment){
      console.log('payload is: ' + JSON.stringify(request.payload) );
      Client.findById(request.payload.clientId, function(err, client){
        console.log('client = ' + JSON.stringify(client));
        client.apartment = apartment._id;
        apartment.tenants.push(client._id)
        client.save(function() {
          apartment.save(function(){
            reply.redirect('/clients/' + client._id)
          });
        });
      });
    });
  }
};
