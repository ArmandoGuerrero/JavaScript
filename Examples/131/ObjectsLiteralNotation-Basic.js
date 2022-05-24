/*   =   =   =   =   =   =   =   =   =   =   =   */
/*      Cengage - JavaScript Web Warrior Series 6Ed - 2015
/*
/*		PAG. 80.	addEventListener
/*   	PAG. 490.  	Defining Custom JavaScript Objects
/*
/*   =   =   =   =   =   =   =   =   =   =   =   */

document.getElementById("fname").focus();
alert("Hello World");
	// using object notation to create ObjFName & ObjLName property names
	// twice are declared as sub-objects of the passengers object
var ticket = { flight: "", passengers: { ObjFName: "", ObjLName: "" } };

function registerName() {
	var passengerList = document.getElementById("passengers"); // UL element
	var passengerName = document.createElement("li"); //  LI element
	// add entered fname & lname to ticket object as new property values
	ticket.passengers.ObjFName = document.getElementById("fname").value;
	ticket.passengers.ObjLName = document.getElementById("lname").value;
	// add ObjFName & ObjLName object notation property values in LI element
	passengerName.innerHTML = ticket.passengers.ObjFName + " " + ticket.passengers.ObjLName;
	// add entered names to passenger list in ticket section
	passengerList.appendChild(passengerName);
	// create property & its value to an existing object
	ticket.ShippingSpeed = "Humans";
	// clear first and last names from form
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	// display ticket and passengers section
	document.getElementById("ticket").style.display = "block";
	document.getElementById("passengersSection").style.display = "block";
	shipspeed.innerHtml = "<h2>" + ticket.ShippingSpeed + "</h2>";
	document.getElementById("shipspeed").style.display = "block";
	// return focus to First Name field to facilitate entry of
	// another passenger name
	document.getElementById("fname").focus(); }

function createEventListeners() {
	var nameButton = document.getElementById("addName");
	if (nameButton.addEventListener) {
		nameButton.addEventListener("click", registerName, false); } }

if (window.addEventListener) {
		window.addEventListener("load", createEventListeners, false);
		}

		
		