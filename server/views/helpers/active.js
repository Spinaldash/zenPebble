'use strict';

module.exports = function setActive(currentPath, expectedPath) {
  if (currentPath === expectedPath) {
    return 'active';
  }
};
