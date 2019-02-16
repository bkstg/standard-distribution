"use strict";

var Globals = {
  behaviours: {},
  settings: {},
  attach: function() {
    for (var behaviour in Globals.behaviours) {
      Globals.behaviours[behaviour]();
    }
  }
};

