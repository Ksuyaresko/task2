require([
    'jquery',
    'domReady!',

], function ($) {
    'use strict';

    $(".burger").click(function(){
        $(".burger").toggleClass("burger__open");
        $(".header__nav").toggleClass("nav__mob");
        $(".select2-container").toggleClass("visible");
        $(".header__phone").toggleClass("visible");
    });

    $(".subelement").click(function(){
        $(".subelement").toggleClass("subelement__open");
        $(".nav__mob li:last-child .submenu").toggleClass("visible");
    });



    $(".header__search_img").click(function(){
        $(".header__search_active").addClass("visible");
    });

    $(".header__search_close").click(function(){
        $(".header__search_active").removeClass("visible");
    });

});