"use strict";

// Libraries.
require('bootstrap');

// Internal modules.
require('./includes/collection.js');
require('./includes/calendar.js');
require('./includes/schedule.js');
require('./includes/events.js');
require('./includes/invitation.js');

// Attach globals.
var Globals = require('./includes/globals.js');
Globals.attach();
