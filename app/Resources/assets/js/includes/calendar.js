"use strict";

require('bootstrap');
require('bootstrap-calendar');
require('jquery-once');

var Globals = require('./globals.js');

Globals.behaviours.calendar = function() {
  var path = window.location.pathname.split("/");

  $('#calendar').once().each(function() {
    var events_source = $(this).data('app-url') + '/' + $(this).data('production-slug') + '/schedule/event';
    var calendar = $(this).calendar({
      tmpl_path: "/build/components/bootstrap-calendar/tmpls/",
      events_source: events_source,
      format12: true,
      view: 'week',
      onAfterViewLoad: function(view) {
        $('h3.date-display').text(this.getTitle());
        $('.btn-group button').removeClass('active');
        $('button[data-calendar-view="' + view + '"]').addClass('active');
      },
    });

    $('.btn-group button[data-calendar-nav]').each(function() {
      var $this = $(this);
      $this.click(function() {
        calendar.navigate($this.data('calendar-nav'));
      });
    });

    $('.btn-group button[data-calendar-view]').each(function() {
      var $this = $(this);
      $this.click(function() {
        calendar.view($this.data('calendar-view'));
      });
    });
  });
}
