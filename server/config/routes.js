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
  {method: 'post', path: '/apartments/{apartmentId}', config: require('../routes/apartments/update')}

];
