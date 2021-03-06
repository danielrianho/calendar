$(document).ready(function(){

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	// if (m < 10) {
	// 	m = '0' + '' + m;
	// }
	// if (d < 10) {
	// 	d = '0' + '' + d;
	// }
	var y = date.getFullYear();
	
	var calendar_sound = $('#calendar_sound').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},

		firstDay: 1,
		selectable: true,
		selectHelper: true,
		allDaySlot: false,
		defaultView: 'agendaWeek',
		selectable: true,
		selectHelper: true,
	  	axisFormat: 'HH:MM',
		defaultDate: date,
		editable: true,
		eventOverlap: false,
		selectOverlap: false,
		timezone: 'local',
		timeFormat: 'H(:mm)',
		minTime: "07:00:00",
  		maxTime: "21:00:00",
  		axisFormat: 'HH:mm',

		select: function(start, end, allDay) {
			$('#calendarModal').modal()
			$('#submitBtn').on('click', function() {
				var title = $('#userName').val()
				if (title) {
					start = moment(start).format('YYYY-MM-DD hh:mm:ss');
					end = moment(end).format('YYYY-MM-DD hh:mm:ss');
					$.ajax({
						url: 'http://localhost:8888/kokokaka/calendar/add_events_sound.php',
						data: 'title='+ title+'&start='+ start +'&end='+ end ,
						type: "POST",
						success: function(json) {
							// alert('OK');
							$("#calendar_sound").fullCalendar("refetchEvents");							
						}
					});

					calendar_sound.fullCalendar('renderEvent',
						{
							title: title,
							start: start,
							end: end,
							allDay: allDay
						},
						true // make the event "stick"
					);
				}
			})
			calendar_sound.fullCalendar('unselect');
		},

		eventClick: function(calEvent, jsEvent, view) {

	         alert('Event: ' + calEvent.title);
	        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
	        // alert('View: ' + view.name);

	        // // change the border color just for fun
	        // $(this).css('border-color', 'red');		
	    },
		  
	   
  	
  		eventDrop: function(event, delta, start, end) {
			start = moment(start).format('YYYY-MM-DD hh:mm:ss');
			end = moment(end).format('YYYY-MM-DD hh:mm:ss');
			$.ajax({
				url: 'http://localhost:8888/kokokaka/calendar/update_events_sound.php',
				data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
				type: "POST",
				success: function(json) {
					// $("#calendar_sound").fullCalendar("refetchEvents");
					// alert("OK");
				}
			});
		},

		eventResize: function(event, start, end) {
			start = moment(start).format('YYYY-MM-DD hh:mm:ss');
			end = moment(end).format('YYYY-MM-DD hh:mm:ss');
			$.ajax({
				url: 'http://localhost:8888/kokokaka/calendar/update_events_sound.php',
				data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
				type: "POST",
				success: function(json) {
					// $("#calendar_sound").fullCalendar("refetchEvents");
				// alert("OK");
				}
			});

		},

		events: 'http://localhost:8888/kokokaka/calendar/events_sound.php',
	    
	})	
});
