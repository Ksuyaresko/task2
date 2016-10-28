(function () {
  'use strict';

  var assets = '';
  if (typeof window === 'object' && window.assets_version) {
    assets = window.assets_version;
    requirejs.config({
      "urlArgs":     `bust=${assets}`,
    });
  }
}());
