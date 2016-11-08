require([
    'jquery',
    'domReady!',
], function ($) {
    'use strict';

    function CallbackCheck() {
        if ($(window).width() < 850) {

            $(".callback__btn").click(function(){
                $(".callback").addClass("visible");
                //console.log('open click on window < 850');
            });

            $(".callback__close").click(function(){
                $(".callback").removeClass("visible");
                //console.log('close click on window < 850');
            });


        }
        else /*($(window).width() > 850)*/ {
            $(".header__phone_number,  .header__phone_info, .fa-angle-down").click(function(){
                $(".callback").toggleClass("visible");
                //console.log('toggle class on window > 850');
            });
        }
    };

    $(CallbackCheck);
    $(window).resize(CallbackCheck);


    $(".header__search_img").click(function(){
        $(".header__search_active").addClass("visible");
    });

    $(".header__search_close").click(function(){
        $(".header__search_active").removeClass("visible");
    });

});