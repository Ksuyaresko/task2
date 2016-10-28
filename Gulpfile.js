'use strict';

const gulp = require('gulp');
const path = require('path');
const branderGulp = require('brander-gulp-tasks');

var env = process.env.NODE_ENV || process.env.SYMFONY_ENV || 'dev';
var config = {
  ENV:          env,
  dependencies: {
    js:          {
      minify:     env !== 'dev',
      paths:      {
        '': ['frontend'],// "./" вначале - текущая папка
        //'подПапка': ['./src/Rt/Bundle/AdminBundle/Resources/frontend'],//Друг, исправь меня!
      },
      extensions: ['js', 'es6'],
      babel:      {
        /*
         USE .babelrc INSTEAD
         */
      },
    },
    views:       {
      paths:      {
        '': ['views',],// "./" вначале - текущая папка
        //'подПапка/': ['./src/Rt/Bundle/AdminBundle/Resources/frontend/views',],//Друг, исправь меня!
      },
      extensions: ['twig'],
      options:    {
        module:         'amd',
        twig:           'twig',
        compileOptions: {
          viewPrefix: 'templates/'
        }
      },
      DEST_PATH:  './public/dependencies/js'
    },
    stylesheets: {
      minify:       env !== 'dev',
      paths:        {
        '': './frontend'
      },
      extensions:   ['scss', 'css'],
      autoprefixer: [
        "last 2 version",
        "ie 10",
        "ios 6",
        "android 4"
      ]
    },
    fonts:       {
      paths:      {
        '': './frontend'
      },
      extensions: ['eot', 'svg', 'ttf', 'woff', 'woff2']
    },
    images:      {
      paths:      {
        '': './frontend'
      },
      extensions: ['svg', 'jpg', 'jpeg', 'png', 'gif']
    },
    bower:       {
      BOWER_JSON:       'bower.json', // relative to cwd
      BOWER_COMPONENTS: 'bower_components',
      flatten:          true,
      minify:           env !== 'dev',
      cwd:              '.',
    },
    cp:          {
      files:     {
        'node_modules/twig/twig.min.js': 'twig',
      },
      DEST_PATH: './public/dependencies/js'
    },
  },
  build: {
    rjs:    {
      entryPoints:    {
        'page/testFrontend': {},
      },
      defaultOptions: {
        mainConfigFile: './public/dependencies/js/config/require.js',
        //stubModules: ['text', 'json', 'json!/translations'],
        //inlineText: true,
        //pragmas: {
        //  excludeRequireCss: true
        //}
        inlineJSON:     false,
        //inlineTWIG: false,
        //appDir: 'public',
        //config.dependencies.js.minify
        //out:            `js/page/testFrontend__.js`,
      },
      DEST_PATH:      './public/dependencies/js'
    },
    concat: {
      entryPoints: {
        'require.js': [
          'public/dependencies/js/require.js',
          'public/dependencies/js/config/require.js',
          'public/dependencies/js/config/boost.js'
        ]
      },
      options:     {newLine: ';\n'},
      DEST_PATH:   './public/dependencies/js',
    },
  },
  browsersync:  {
    watch:   [
      'views/*.twig',
      'public/dependencies/**/*',
      'fixtures/*.json',
    ],
    options: {
      https: {
        key:  path.join(__dirname, 'config', 'keys', 'server', 'privkey.pem'),
        cert: path.join(__dirname, 'config', 'keys', 'server', 'fullchain.pem')
      }
    },
    WAIT:    500,
  },
  generate:     {
    assets: {
      to: './fixtures/assets.json'
    },
  },
  DEST_PATH:    './public/dependencies'
};

branderGulp(gulp, config);
