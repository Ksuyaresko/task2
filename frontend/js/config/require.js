(function () {
  'use strict';
  requirejs.config({
    //"urlArgs":     `bust=${assets_version ? assets_version : 'no-assets-warn'}`,
    "baseUrl":     '/dependencies/js',
    "waitSeconds": 30,
    "paths":       {},
    "map":         {
      "*":                            {
        twig:                  'config/twig',
        'backbone.marionette': 'config/marionette.templating'
      },
      "config/twig":                  {
        'twig': 'twig',
      },
      "config/marionette.templating": {
        'backbone.marionette': 'backbone.marionette'
      }
    },
    config:        {
      template: {
        prefix: 'templates/'
      }
    }
  });
}());
