'use strict';

var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.findByIdAndUpdate(request.params.clientId, request.payload, function() {
      reply.redirect('/clients/' + request.params.clientId);
    });
  }
};
