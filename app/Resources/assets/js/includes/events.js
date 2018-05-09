"use strict";

var once = require('jquery-once');
var Globals = require('./globals.js');

Globals.behaviours.full_company_widget = function() {
  $('.event-invitation-list').once().each(function (e) {
    var full_company = $(this).find('.event-full-company');
    var invitations = $(this).find('.event-invitations');

    // Hide the invitation list if full company is checked.
    if ($(full_company).find('input[type="checkbox"]:checked').length > 0) {
      $(invitations).hide();
    }

    // Toggle invitations on full company change.
    $(full_company).find('input[type="checkbox"]').change(function (e) {
      $(invitations).toggle();
    });
  });
}

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
