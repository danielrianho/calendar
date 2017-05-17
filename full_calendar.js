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

	eventClick: function(calEvent, jsEvent, view) {

         alert('Event: ' + calEvent.title);
 //        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
 //        alert('View: ' + view.name);

 //        // change the border color just for fun
 //        $(this).css('border-color', 'red');
 		
 		
     },

	  
    select: function(start, end, allDay, event) {

    	
            // var allDay = !start.hasTime && !end.hasTime;
            // var newEvent = new Object();
            // newEvent.title = abc;
            // newEvent.start = moment(start).format();
            // newEvent.allDay = false;
            // $('#calendar').fullCalendar('renderEvent', newEvent);

   		//$('#modalTitle').html(event.title);
 	//     $('#modalBody').html(event.description);
		// $('#eventUrl').attr('href',event.url);
		$('#calendarModal').modal();

        //alert("selected from: " + a.format() + ", to: " + b.format());
        $("#submitBtn").on('click', function () {

    	var title= $('#eventTitle')[0].value

    	 var mockEvent = {title: title, start, end};
                $('#calendar').fullCalendar('renderEvent', mockEvent);
                // $('#submitBtn').unbind('click');
                // $('#calendarModal').modal('hide');
        	// var starttime = moment(start).format('MMMM Do YYYY h:mm a'); 
         //    var endtime = moment(end).format('h:mm a'); 
        	
        //console.log(title[0].id);
           

        	


        $.ajax({
            url: 'index.html',
            type: "GET",
            data: {
                //q: "test"
            },
            dataType: "html",
            success: function(start) {
			// alert("Data: " + a);
            },
            error: function(start, end) {
                //alert("Request: " + JSON.stringify(a));
            }
        })
       })
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
