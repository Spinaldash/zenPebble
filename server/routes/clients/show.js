'use strict';

var setActive = require('../../views/helpers/active');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id:request.params.clientId}).populate('apartment').exec(function(err, client) {
        reply.view('templates/clients/show', {path: '/clients', setActive:setActive, client:client});
    });
  }
};
