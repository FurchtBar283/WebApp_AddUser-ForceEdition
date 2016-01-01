var nameTypedIn;
var listOfUsernames = [];
var listOfUserAges = [];
var listOfUserGenders = [];

function init(){
	var saveButton = document.getElementById("saveButton");
	saveButton.addEventListener("click", saveDataInStorage, false);

	listOfUsernames = JSON.parse(localStorage["listOfUsernames"]);
	listOfUserAges = JSON.parse(localStorage["listOfUserAges"]);
	listOfUserGenders = JSON.parse(localStorage["listOfUserGenders"]);

}

function saveDataInStorage(){

	nameTypedIn = window.document.getElementById("nameTextfield");
	var username = nameTypedIn.value;

	if(username == ""){
		alert("You forgot to type in a name.");
	}else{

		// save the username
		listOfUsernames.push(username);
		localStorage["listOfUsernames"] = JSON.stringify(listOfUsernames);

		// save the age
		slider = window.document.getElementById("slider-0");
		var inputAge = slider.value;
		listOfUserAges.push(inputAge);
		localStorage["listOfUserAges"] = JSON.stringify(listOfUserAges);

		// save the gender
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

	// read listOfUserAges
	var userAgesToPrint = [];
	var storedAges = JSON.parse(localStorage["listOfUserAges"]);
	storedAges.forEach(function(entry){
		userAgesToPrint.push(entry);
	});

	// read listOfUserGenders
	var userGendersToPrint = [];
	var storedGenders = JSON.parse(localStorage["listOfUserGenders"]);
	storedGenders.forEach(function(entry){
		userGendersToPrint.push(entry);
	});

	// modify the html and insert all users
	var i = 0
	storedNames.forEach(function(entry){
		$( "#userlist" ).append( "<li>" + entry + ", " + userAgesToPrint[i] + ", " + userGendersToPrint[i] + "</li>" );
		i++;
	});
}
