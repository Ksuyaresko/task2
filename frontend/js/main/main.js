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


    
   
    
    //----FullPage---//
    
var fullPageCreated = false;
createFullpage();
    
function fullPageCheck() {
    if ($(window).width() <= 850) {
    console.log("not fullpage");
    fullPageCreated = false;  
    $.fn.fullpage.destroy('all');
    }
    if ($(window).width() > 850) {
        createFullpage();
    }
}
    
function createFullpage() {
    if(fullPageCreated === false) {
        fullPageCreated = true;
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage'],
        verticalCentered: false,
        paddingTop: '148px',
        paddingBottom: '250px',
        fixedElements: '.footer, .down',
    });
}
}
    
$(fullPageCheck);
$(window).resize(fullPageCheck);

});