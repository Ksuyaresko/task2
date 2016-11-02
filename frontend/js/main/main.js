require([
'jquery',
'domReady!',
'slick',
'jquery.fullpage',
'main',
    
], function ($) {
'use strict';
    
    $('.slider').slick({
      dots: true,
    });
    
    
    $('.medals').slick({
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    });

   $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage'],
    verticalCentered: false,
    paddingTop: '148px',
    paddingBottom: '180px',
    fixedElements: '.footer, .down',
   });  
    
    
//$(window).on("load resize", function() {
    if ($(window).width() <= 850) {	
        $('.header__nav li').off('hover');

        } else {
            $('.header__nav li').hover(function() {
        var submenu = $(this).find('ul');
        submenu.stop(true, true).slideDown(300).clearQueue();	

    }, function() {
        var submenu = $(this).find('ul');
        submenu.stop(true, true).slideUp(400).clearQueue();
        });
        };
//});   
    
    
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

    
    
    //$(window).on("load resize", function() {
    if ($(window).width() >= 850) {
        $(".header__phone").click(function(){
            $(".callback").toggleClass("visible");
            $(".fa-angle-down").toggleClass("turned");
    });
    } 
    else {
    $(".callback__close").click(function(){
        $(".callback").removeClass("visible");
    }); 
        
    $(".fa-angle-down").click(function(){
        $(".callback").addClass("visible");
    });
    }
    // });
    
    
    $(".header__search_img").click(function(){
        $(".header__search_active").addClass("visible");
        //$(".header__search_img").addClass("invisible");
    });
    
    $(".header__search_close").click(function(){
        $(".header__search_active").removeClass("visible");
        //$(".header__search_img").removeClass("invisible");
    });



});