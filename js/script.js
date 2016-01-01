var nameTypedIn;
var listOfUsernames = [];
var listOfUserAges = [];
var listOfUserGenders = [];

/*
Funktion zur initalisierung des Listeners
und der gespeicherten Daten
aus dem Local Storeage
*/

function init(){
	var saveButton = document.getElementById("saveButton");
	saveButton.addEventListener("click", saveDataInStorage, false);

	// gespeicherte Daten auslesen und in das array schreiben


	listOfUsernames = JSON.parse(localStorage["listOfUsernames"]);
	listOfUserAges = JSON.parse(localStorage["listOfUserAges"]);
	listOfUserGenders = JSON.parse(localStorage["listOfUserGenders"]);

}


/*Speicherung der Daten im Storeage*/

function saveDataInStorage(){

	nameTypedIn = window.document.getElementById("nameTextfield");
	var username = nameTypedIn.value;

	//eingabe auswerten
	if(username == ""){
		alert("You forgot to type in a name.");
	}else{
		//daten speichern

		// save username
		listOfUsernames.push(username);
		localStorage["listOfUsernames"] = JSON.stringify(listOfUsernames);

		// save age
		slider = window.document.getElementById("slider-0");
		var inputAge = slider.value;
		listOfUserAges.push(inputAge);
		localStorage["listOfUserAges"] = JSON.stringify(listOfUserAges);

		// save gender
		inputGender = document.querySelector('input[name="genderSelection"]:checked').value;
		listOfUserGenders.push(inputGender);
		localStorage["listOfUserGenders"] = JSON.stringify(listOfUserGenders);

		alert("UserData has been successfully saved.");

		nameTypedIn.value = "";

		listUsers();
	}
}


function listUsers(){

	var storedNames = JSON.parse(localStorage["listOfUsernames"]);

	$( "#userlist" ).empty();

	// listOfUserAges auslesen
	var userAgesToPrint = [];
	var storedAges = JSON.parse(localStorage["listOfUserAges"]);
	storedAges.forEach(function(entry){
		userAgesToPrint.push(entry);
	});

	// listOfUserGenders auslesen
	var userGendersToPrint = [];
	var storedGenders = JSON.parse(localStorage["listOfUserGenders"]);
	storedGenders.forEach(function(entry){
		userGendersToPrint.push(entry);
	});

	var i = 0
	storedNames.forEach(function(entry){
		$( "#userlist" ).append( "<li>" + entry + ", " + userAgesToPrint[i] + ", " + userGendersToPrint[i] + "</li>" );
		i++;
	});

}
