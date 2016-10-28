import _ from 'lodash'
import moduleRjs from 'module'

let global = {};
let store = {};

export function load(name, req, onLoad, config) {
  if ((config && config.isBuild && (config.inlineTWIG === false)) || (req && req.toUrl(name).indexOf('empty:') === 0)) {
    //avoid inlining if inlineJSON:false
    //and don't inline files marked as empty!
    onLoad(null);
    return;
  }
  if (store[name]) {
    onLoad(store[name]);
    return;
  }

  let prefix = moduleRjs.config().prefix || 'templates/';
  (req || requirejs)([`${prefix}${name}`], function (template) {
    store[name] = function (context) {
      return template.render.call(template,
        _.merge({}, global, context)
      )
    };

    onLoad(store[name]);
  });
}

export function setGlobals(globals) {
  global = globals;
}



