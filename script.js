/*window.onload = function () {

	function knappFunktion() {
	console.log('hej');
	}

document.getElementById('knapp').addEventListener('click', knappFunktion);
};


window.onload = function() {

	function knappFunktion(event) {
	console.log(event);
	}

document.getElementById('knapp').addEventListener('click', knappFunktion);
};
*/

/////////////////////////////////////////////////////////////////////////////////

//Skriv en JavaScript-funktion som skickar användaren vidare 
//till en annan webbadress efter tre sekunder

/*
window.onload = function() {

	var knappFunktion = function(){	
		window.location.href = "http://www.google.se";
	}

	setTimeout(knappFunktion, 3000);
	

document.getElementById('knapp').addEventListener('click', knappFunktion);

};
*/
//<------------funktion med knapp ----------------------->
/* 
window.onload = function() {

	var knappFunktion = function(){	
		window.location.href = "http://www.google.se";
	};

	 function knappFunktion(){	
		window.location.href = "http://www.google.se";
	}; 

	setTimeout(knappFunktion, 3000);
	

document.getElementById('knapp').addEventListener('click', knappFunktion);

};*/


/////////////////////////////////////////////////////////////////////////////////



//Gör så att sidans titel reflekterar hur många sekunder sidan har varit öppen 

/*

addEventListener('load')
window.onload = function() {

	var rubrikFunktion = function(){
		document.title;
	}

	setInterval(rubrikFunktion);


document.getElementById('title').addEventListener('click', rubrikFunktion);
};
*/



/////////////////////////////////////////////////////////////////////////////////


//Ändra färg på sajtens bakgrundsfärg till en valfri färg 
//genom att endast använda JavaScript Tips: Använd style-egenskapen på body-elementet

/*

addEventListener('load', function () {
	document.body.style.backgroundColor = "#E8E8E8";
});
*/

/////////////////////////////////////////////////////////////////////////////////

//Gör så att sajtens bakgrundsfärg kan ändras genom 
//att skriva in den önskade färgen i ett input-textfält och klicka på en knapp


// addEventListener('load', function() {

// 	var a = document.getElementById('input').value;

// 	document.getElementById('knapp').onclick = function() {

// 		document.body.style.backgroundColor = a;

// 		 console.log(document.getElementById('input').value);
// 	};

// }); 

/////////////////////////////////////////////////////////////////////////////////


//Skapa en funktion som tar ett HTML-element som parameter och 
//returnerar en sammanslagning av all text i elementet (Även text från samtliga underelement)
/*

addEventListener('load', function() {

	var children = [];

	for (var i = 0; i < childNodes; i++)
		return children.push.(childNotes.[i]);

	
	var i = document.getElementByClassName('rubrik')[0];

	document.getElementById('knapp').onclick = function() {

		

		console.log(document.getElementByTagName('p')[0].innerHTML);

	};

});
window.alert();
*/
//Integrera funktioner som du redan har skrivit (t.ex. uppgifterna i Laboration 1)
//och gör så att indata kan skrivas i ett input-textfält, ett klick på en knapp gör så att funktionen körs,
//och så att resultatet av funktionen läggs till i en lista genom ett li-element




