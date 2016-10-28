'use strict';

var _ = require('lodash');
var translations = require('./translations');


var Translator = function (translations, fallback) {
    _.extend(this, {
        translations: translations,
        fallback: fallback
    });
};

Translator.prototype.trans = function (path, locale) {
    if(!locale) {
        locale = this.fallback
    }

    try {
        var t = _.reduce(path.split('.'), _.bind(function (memo, p) {
            return memo[ p ];
        }, this), this.translations[ locale ]);

        if(!_.isString(t) && !_.isNumber(t)) {
            throw 'trans must be string';
        }

        return t;
    }
    catch (e) {
        return path;
    }
};


module.exports = (function () {

    return new Translator(translations, 'ru')
})();