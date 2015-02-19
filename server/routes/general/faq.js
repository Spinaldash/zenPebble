'use strict';

var setActive = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/general/faq', {path: '/faq', setActive:setActive});
  }
};
