'use strict';

const chalk = require('chalk');
const Router = new require('express').Router;
const app = new Router();
const _ = require('lodash');
require('./twig');
const JSON5 = require('json5');
const fs = require('fs');
const glob = require('glob');
const minimatch = require('minimatch');

const packageJson = require('../package.json');

var excludes = [
    '_.twig',
    '_*.twig',
];
var pages = [];

var global = {};
try {
    global = JSON5.parse(fs.readFileSync(ns('@fixtures/_.json')));
} catch (e) {
    console.warn(e);
}
try {
    global.assets = JSON5.parse(fs.readFileSync(ns('@fixtures/assets.json')));
} catch (e) {
    console.warn(e);
    console.error('run gulp');
}
_.merge(global, {
    var: {
        env: process.env.NODE_ENV || 'dev',
    },
});

// ------------------ OVERRIDES --------------------
pages = [
    // {parent: 'класс', uri: 'ссылка с параметрами', name: 'название'},
    // {parent: '', uri: '/new-credit?creditState=3&asdf=Хуй', name: 'new-credit.twig - asdf'},
    {parent: '', uri: '/contextable?title=src/controller.js:43', name: 'contextable.twig - измени меня в src/controller.js:43'},
];
// ------------------- ======== --------------------

const ignoreOverrides = [
  // то, что должно работать по старому
  // '/new-credit'
];

_.each(pages, function (page) {
    const uri = page.uri.replace(/\?.*$/, '');
    if (ignoreOverrides.indexOf(uri) > -1) {
        return;
    }
    console.log('override action for: ' + chalk.yellow(uri))
    ignoreOverrides.push(uri);
    const template = uri.substr(1, uri.length) + '.twig';
    app.get(uri, function (req, res) {
        fs.readFile(ns('@fixtures' + uri + '.json'), function (err, json) {
            var context = {
                requestQuery: req.query
            };
            if(!err) {
                try {
                    context = _.merge(context, JSON5.parse(json.toString()));
                } catch (e) {
                }
            }
            res.render(template, _.merge(global, context));
        });
    });
});

_.each(glob.sync(ns('@views') + '/**/*.twig'), function (file) {
    var template = file.substr(ns('@views').length + 1)
      , uri = '/' + template.substr(0, template.length - '.twig'.length);

    if (ignoreOverrides.indexOf(uri) !== -1) {
        return;
    }

    if(uri.indexOf('/_/') === -1) {
        app.get(uri, function (req, res, next) {
            fs.readFile(ns('@fixtures' + uri + '.json'), function (err, json) {
                var context = {};
                if(!err) {
                    try {
                        context = JSON5.parse(json.toString())
                    } catch (e) {
                    }
                }
                res.render(template, _.merge(global, context));
            });
        });
    }


    if(_.some(excludes, function (exclude) {
          return minimatch(template, exclude)
      })
    ) {
        return;
    }


    const parent = require('path').dirname(template);
    pages.push({
        parent: parent === '.' ? '' : parent,
        name: template,
        uri: uri
    });
});

var load = function (json) {
    return new Promise(function (resolve, reject) {
        fs.readFile(ns('@fixtures/_' + json + '.json'), function (err, json) {
            if(err) reject(err);
            resolve(JSON5.parse(json.toString()));
        });
    });
};

app.get('/', function (req, res, next) {
    res.render('_.twig', _.merge(global, {
        pages: pages,
        title: `${packageJson.name} - ${packageJson.version}`,
        assets: global.assets
    }));
});

app.get('/translations', function (req, res, next) {
    res.json(require('./translations'));
});

_.each([
    'rent',
    'promotion',
    'option',
    'place',
    'slide',
    'promotion_type',
    'specification',
    'layout'
], function (api) {
    var j = api + 's';
    app.get('/:locale/api/' + api + 's', function (req, res, next) {
        load(j).then(function (json) {
            if(req.query.query && JSON.parse(req.query.query).best_offer === true) {
                json = json.slice(0, 3)
            }
            res.json(json)
        }).catch(function (err) {
            next(err)
        });
    });

    app.get('/:locale/api/' + api + 's/:id', function (req, res, next) {
        load(j).then(function (json) {
            res.json(json[ 0 ])
        }).catch(function (err) {
            next(err)
        });
    });
});


_.each([
    'ap_item:id?',
    'ap_item_adv:id?',
    'index',
    'contact',
    'ap_portal_rent',
    'ap_rent_listing',
    'ap_partnership',
    'ap_advertising'
], function (r) {

    app.get('/_/' + r, function (req, res, next) {
        res.render('_/_.twig', global);
    });
});

app.get('/_/*', function (req, res, next) {
    res.render('_/_.twig', global);
});

module.exports = app;