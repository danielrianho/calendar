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
	var userNewEmail;
	
	var calendar_conf = $('#calendar_default').fullCalendar({
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
				//alert(userNewEmail)
				if (title) {
					start = moment(start).format('YYYY-MM-DD hh:mm:ss');
					end = moment(end).format('YYYY-MM-DD hh:mm:ss');
					email = $('#userEmail').val();
					// alert(email)
					$.ajax({
						url: 'http://localhost:8888/kokokaka/calendar/add_events.php',
						data: 'title='+ title + '&email='+ email +'&start='+ start +'&end='+ end ,
						type: "POST",
						success: function(json) {
							alert("OK");
							$("#calendar_default").fullCalendar("refetchEvents");	
						}
					});

					calendar_conf.fullCalendar('renderEvent',
						{
							title: title,
							email: email,							
							start: start,
							end: end,
							allDay: allDay
						},
						true // make the event "stick"
					);
				}
			})
			calendar_conf.fullCalendar('unselect');
		},

    
		eventClick: function(event, calEvent, jsEvent, view) {
			
			$('#modalTitleDelete').html(event.title);
            $('#modalBody').html(event.description);
            $('#newModalEmail').html(event.email);
            $('#eventUrl').attr('href',event.url);
            $('#fullCalModal').modal();
	        
	    },
		  
	  
  		eventDrop: function(event, delta, start, end) {
			start = moment(start).format('YYYY-MM-DD hh:mm:ss');
			end = moment(end).format('YYYY-MM-DD hh:mm:ss');
			$.ajax({
				url: 'http://localhost:8888/kokokaka/calendar/update_events.php',
				data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
				type: "POST",
				success: function(json) {
					alert("OK");
					// $("#calendar").fullCalendar("refetchEvents");	
				}
			});
		},
		
		eventResize: function(event, start, end) {
			start = moment(start).format('YYYY-MM-DD hh:mm:ss');
			end = moment(end).format('YYYY-MM-DD hh:mm:ss');
			$.ajax({
				url: 'http://localhost:8888/kokokaka/calendar/update_events.php',
				data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
				type: "POST",
				success: function(json) {
					alert("OK");
					// $("#calendar_default").fullCalendar("refetchEvents");	
				}
			});

		},

		events: 'http://localhost:8888/kokokaka/calendar/events.php',
	    
	})   

});
