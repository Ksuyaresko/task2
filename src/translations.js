var yamljs = require('yamljs');
var fs = require('fs');
var glob = require('glob');
var _ = require('lodash');
var files = glob.sync(__dirname + '/../translations/*.yml');

var translations = {};
_.each(files, function (file) {
    var trans = yamljs.parse(fs.readFileSync(file).toString());
    _.merge(translations, trans);
});


module.exports = translations;