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
    paddingTop: '120px',
    paddingBottom: '100px',
    fixedElements: '.footer',
   });  


});