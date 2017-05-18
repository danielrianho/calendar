
$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('#calendar_default').fullCalendar('render');
        $('#calendar_sound').fullCalendar('render');
    });
});