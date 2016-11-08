require([
    'domReady!',
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyBTWW9cR4CPuvpIMHEDpZ28M1gnQg0zqNE',
], function ($) {
    'use strict';

    /*function myMap() {

        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(50.027572, 36.223641),
            zoom: 16,
            panControl: false,
            //streetViewControl: false,
            //mapTypeControl: false,

        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(50.027572, 36.223641),
                map: map,
                icon: 'dependencies/images/mapicon.png',
                title: "Ломбард Капитал",
            });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.027400, 36.223500),
            map: map,
            icon: 'dependencies/images/mapicon.png',
            title: "Ломбард Капитал 2",
        });




        };


    myMap();*/


    var neighborhoods = [
        {lat: 50.027572, lng: 36.223641},
        {lat: 50.026300, lng: 36.222400},
        {lat: 50.028300, lng: 36.224400},
    ];

    var markers = [];
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {lat: 50.027572, lng: 36.223641}
        });
    }

    function drop() {
        clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
            addMarkerWithTimeout(neighborhoods[i], i * 400);
        }
    }

    function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
            markers.push(new google.maps.Marker({
                position: position,
                map: map,
                icon: 'dependencies/images/mapicon.png',
                animation: google.maps.Animation.DROP
            }));
        }, timeout);
    }

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    initMap();
    drop();
});