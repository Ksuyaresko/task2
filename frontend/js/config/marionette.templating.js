define([
  'lodash',
  'module',
  'backbone.marionette',
  'template'
], function (_, module, Marionette, template) {
'use strict';

  _.extend(Marionette.TemplateCache.prototype, {
    load() {
      if (this.compiledTemplate)
        return this.compiledTemplate;
      var loadedTemplate;
      template.load(this.templateId, null, (r) => loadedTemplate = r);
      return loadedTemplate;
    }
  });

  return Marionette;
});