'use strict';

const abbrevName = (name) => name.split(' ').map(word => word.slice(0, 1).toUpperCase()).join('.');
