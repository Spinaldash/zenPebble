'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/faq', config: require('../routes/general/faq')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},
  {method: 'get', path: '/apartments', config: require('../routes/apartments/index')},
  {method: 'get', path: '/apartments/new', config: require('../routes/apartments/new')},
  {method: 'post', path: '/apartments', config: require('../routes/apartments/create')},
  {method: 'get', path: '/apartments/{apartmentId}', config: require('../routes/apartments/show')},
  {method: 'post', path: '/apartments/{apartmentId}/delete', config: require('../routes/apartments/destroy')},
  {method: 'get', path: '/apartments/{apartmentId}/edit', config: require('../routes/apartments/edit')},
  {method: 'post', path: '/apartments/{apartmentId}', config: require('../routes/apartments/update')},

  {method: 'post', path: '/apartments/{apartmentId}/rent', config: require('../routes/apartments/rent')},

  {method: 'get', path: '/clients', config: require('../routes/clients/index')},
  {method: 'get', path: '/clients/new', config: require('../routes/clients/new')},
  {method: 'post', path: '/clients', config: require('../routes/clients/create')},
  {method: 'get', path: '/clients/{clientId}', config: require('../routes/clients/show')},
  {method: 'post', path: '/clients/{clientId}/delete', config: require('../routes/clients/destroy')},
  {method: 'get', path: '/clients/{clientId}/edit', config: require('../routes/clients/edit')},
  {method: 'post', path: '/clients/{clientId}', config: require('../routes/clients/update')},
  {method: 'post', path: '/clients/{clientId}/evict', config: require('../routes/clients/evict')},

  {method: 'get', path: '/admin', config: require('../routes/admin/index')},



];
