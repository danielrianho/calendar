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
	console.log(d)
	var y = date.getFullYear();
	var userNewEmail;
	
	var calendar = $('.calendar_default').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},

		selectable: true,
		selectHelper: true,

		select: function(start, end, allDay) {

			

			$('#calendarModal').modal()

			// var newEmail = $('form.userEmail').find('[type ="email"]').val();
	       		

			$('#submitBtn').on('click', function() {

				var title = $('#userName').val()
				
				//alert(userNewEmail)
				if (title) {
					start = moment(start).format('YYYY-MM-DD hh:mm:ss');
					end = moment(end).format('YYYY-MM-DD hh:mm:ss');
					email = $('#userEmail').val();
					alert(email)
					$.ajax({
						url: 'http://localhost:8888/kokokaka/calendar/add_events.php',
						data: 'title='+ title + '&email='+ email +'&start='+ start +'&end='+ end ,
						type: "POST",
						success: function(json) {
						alert('OK');
						}
					});

					calendar.fullCalendar('renderEvent',
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
			calendar.fullCalendar('unselect');
		},

		// eventRender: function( event, element, view ) {
		//  	var newEmail = element.find( '#userEmail' );
		// 	newEmail.html( newEmail.text() );

		// 	console.log(newEmail);
		// },

		// eventRender: function(event, element) {
  //           element.qtip({
  //               content: event.description + '<br />' + event.start,
  //               style: {
  //                   background: 'black',
  //                   color: '#FFFFFF'
  //               },
  //               position: {
  //                   corner: {
  //                       target: 'center',
  //                       tooltip: 'bottomMiddle'
  //                   }
  //               }
  //           })
  //   	},
    


		eventClick: function(event, calEvent, jsEvent, view) {

			

			$('#modalTitleDelete').html(event.title);
            $('#modalBody').html(event.description);
            $('#newModalEmail').html(event.email);
            $('#eventUrl').attr('href',event.url);
            $('#fullCalModal').modal();

             
  
           console.log(event.email)

	        // alert(event.title);

	    	//var newUser = $("input[name='mail']").val()
		

	       // var newUser = calEvent.title
	       // console.log(calEvent)

	       
	        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
	        // alert('View: ' + view.name);

	        // // change the border color just for fun
	        // $(this).css('border-color', 'red');		
	    },
		  
	   
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
		minTime: "07:00:00",
  		maxTime: "21:00:00",
  		axisFormat: 'HH:mm',

  	
  		eventDrop: function(start, end, event, delta) {
			start = moment(start).format('YYYY-MM-DD hh:mm:ss');
			end = moment(end).format('YYYY-MM-DD hh:mm:ss');
			$.ajax({
				url: 'http://localhost:8888/kokokaka/calendar/update_events.php',
				data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
				type: "POST",
				success: function(json) {
					alert("OK");
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
				}
			});

		},

		events: 'http://localhost:8888/kokokaka/calendar/events.php',
	    
	})   

});
