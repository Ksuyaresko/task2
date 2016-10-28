'use strict';

var storage = {};
function namespace(module) {
    if(module.substr(0, 2) === '::') {
        return storage[ '::' ] + '/' + module.substr(2);
    }

    if(/@(\w+)\/(.+)/.test(module)) {
        var t = module.match(/@(\w+)\/(.+)/);
        return storage[ t[ 1 ] ] + '/' + t[ 2 ];
    }

    if(/@(\w+)/.test(module)) {
        var t = module.match(/@(\w+)/);
        return storage[ t[ 1 ] ];
    }

    throw new Error('Wrong ns prefix');
}

global.ns = namespace;

module.exports = function (path, namespace) {
    if(!namespace) {
        namespace = '::';
    }
    storage[ namespace ] = path;
};