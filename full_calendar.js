$(document).ready(function(){

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},

		select: function (start, end, jsEvent, view) {
            var abc = prompt('Enter Title');
            var allDay = !start.hasTime && !end.hasTime;
            var newEvent = new Object();
            newEvent.title = abc;
            newEvent.start = moment(start).format();
            newEvent.allDay = false;
            $('#calendar').fullCalendar('renderEvent', newEvent);
        },

		defaultView: 'agendaWeek',
			
		selectable: true,
		selectHelper: true,
	  	axisFormat: 'HH:mm a',
		defaultDate: date,
		editable: true,
		eventOverlap: false,
		selectOverlap: false,

		events: [
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		]
	})		
});


