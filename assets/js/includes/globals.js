"use strict";

var Chosen = require('chosen-js');

var Globals = {
  behaviours: {
    chosen: function() {
      $('select.chosen').chosen({
        allow_single_deselect: true
      });
    },
  },
  settings: {},
  attach: function() {
    for (var behaviour in Globals.behaviours) {
      Globals.behaviours[behaviour]();
    }
  }
};

module.exports = Globals;
