'use strict';

var setActive = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Apartment.find(function(err, apartments) {
      Client.find(function(err, clients) {


        reply.view('templates/admin/index', {path: '/admin', setActive:setActive, apartments:apartments, clients:clients});
      });
    })
  }
};
