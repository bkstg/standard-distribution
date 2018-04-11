require('bootstrap');
require('bootstrap-calendar');

path = window.location.pathname.split("/");

var calendar = $('#calendar').calendar({
  tmpl_path: "/build/components/bootstrap-calendar/tmpls/",
  events_source: "/" + path[1] + "/schedule/event",
  format12: true,
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
