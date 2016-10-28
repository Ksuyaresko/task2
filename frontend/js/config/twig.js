define([ 'twig', 'translator'/*, 'aeroport/url_generator'*/ ], function (twig, translator, urlGenerator) {
    'use strict';
    twig.extendFunction('asset', function (path) {
        return '/dependencies/' + path;
    });
    twig.extendFilter('phone_format', function (value) {
        if(value.length !== 13) {
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
    twig.extendFilter('trans', function (value) {
        return value;
    });

    twig.extendFilter('console', function () {
        console.log.apply(console, arguments);
    });
    twig.extendFilter('trans', function (path) {
        return translator.trans.apply(translator, arguments);
    });

    twig.extendFunction('route', function (route, params) {
        params = _.omit(params, [ '_keys' ]);
        console.error('there is no router!');
        return urlGenerator.generate.apply(urlGenerator, [ route, params ]);
    });


    twig.extendFunction('query', function (query) {
        query = _.omit(query, [ '_keys' ]);
        return JSON.stringify(query);
    });


    return twig;
});