require([
    'jquery',
    'domReady!',
    'jquery.fullpage',

], function ($) {
    'use strict';


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