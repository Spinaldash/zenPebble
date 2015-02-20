'use strict';

var setActive = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Apartment.find(function(err, apartments) {
      Client.find(function(err, clients) {
        var data = {revenue: 0, roomsFilled: 0, roomsVacant: 0, apartmentsVacant: 0};
        var roomsNum = 0;
        apartments.forEach(function(a) {
          data.revenue += a.tenants.length * a.rent;
          data.roomsFilled += a.tenants.length
          roomsNum += a.roomsNum
          if (a.roomsNum !== a.tenants.length ){
            data.apartmentsVacant++;
          }

        });
        console.log("data.roomsFilled: ", data.roomsFilled);
        console.log("RoomsNUM: ", roomsNum);
        data.roomsVacant = roomsNum - data.roomsFilled;

        reply.view('templates/admin/index', {path: '/admin', setActive:setActive, apartments:apartments, clients:clients, data:data});
      });
    })
  }
};
