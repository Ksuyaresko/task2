require([
    'jquery',
    'domReady!',
], function ($) {
    'use strict';

    if ($(window).width() <= 850) {
        $('.header__nav li').unbind('mouseenter mouseleave');

    } else {
        $('.header__nav li').hover(function() {
            var submenu = $(this).find('ul');
            submenu.stop(true, true).slideDown(300).clearQueue();

        }, function() {
            var submenu = $(this).find('ul');
            submenu.stop(true, true).slideUp(400).clearQueue();
        });
    };



    $(window).resize(function(){
        if ($(window).width() <= 850) {
            $('.header__nav li').unbind('mouseenter mouseleave');

        } else {
            $('.header__nav li').hover(function() {
                var submenu = $(this).find('ul');
                submenu.stop(true, true).slideDown(300).clearQueue();

            }, function() {
                var submenu = $(this).find('ul');
                submenu.stop(true, true).slideUp(400).clearQueue();
            });
        };
    });


});