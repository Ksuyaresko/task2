'use strict';

const twig = require('twig');
const translator = require('./translator');
const fs = require('fs');
const JSON5 = require('json5');
let assets = '';

try {
  assets = JSON5.parse(fs.readFileSync(ns('@fixtures/assets.json')));
} catch (e) {
  console.warn(e);
}

twig.extendFunction('asset', function (path) {
  if (path.indexOf('?') === -1) {
    return `${path}?${assets}`;
  }
  return `${path}&${assets}`;
});

twig.extendFilter('trans', function (path) {
  return translator.trans.apply(translator, arguments);
});
twig.extendFilter('console', function () {
  return console.log.apply(console, arguments);
});

twig.extendFilter('phone_format', function (value) {
  if (value.length !== 13) {
    return value;
  }
  value = value.substr(0, 3) +
    ' (' + value.substr(3, 3) + ') ' +
    value.substr(6, 3) + ' ' +
    value.substr(9, 2) + ' ' +
    value.substr(11)
  ;
  return value;
});

twig.extendFunction('route', function (route, params) {
  return '#';
});


module.exports = twig;