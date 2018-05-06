"use strict";

var once = require('jquery-once');
var Globals = require('./globals.js');

Globals.behaviours.google_maps_autocomplete = function() {

  function initAutocomplete() {
    $('input.google-geolocate').once().each(function (e) {
      // Setup autocomplete.
      var autocomplete = new google.maps.places.Autocomplete((this), {types: ['geocode']});

      // Bias to local options.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    });
  }

  // Attach to window for google APIs.
  window.initAutocomplete = initAutocomplete;
}
