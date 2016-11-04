require([
    'jquery',
    'domReady!',
    'slick',

], function ($) {
    'use strict';

    $('.slider').slick({
        dots: true,
    });


    $('.medals').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    });
    
});;