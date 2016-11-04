require([
    'jquery',
    'domReady!',
    'select2',

], function ($) {
    'use strict';

    $(".header__lg").select2({
        minimumResultsForSearch: Infinity
    });
    
});
