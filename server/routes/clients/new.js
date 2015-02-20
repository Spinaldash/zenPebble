'use strict';

var setActive = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/clients/new', {path: '/clients', setActive:setActive});
  }
};
