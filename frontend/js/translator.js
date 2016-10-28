'use strict';

import _ from 'lodash'
import translations from 'json!/translations'

class Translator {
    constructor(translations, fallback) {
        _.extend(this, {
            translations: translations,
            fallback: fallback
        });
    }

    setLocale(fallback) {
        this.fallback = fallback;
    }

    trans(path, locale = this.fallback) {

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
    }
}


let translator = new Translator(translations, document.getElementsByTagName('html')[0].lang);

export default translator