# JavaScript
### Examples collection to learn JavaScript.  

- [JavaScript Variables](#javascript-variables)
- [JavaScript Functions](#javascript-functions)
- [JavaScript Objects and Methods](#javascript-objects-and-methods)
- [JavaScript CallBacks](#javascript-callbacks)
- [JavaScript Arrow Functions](#javascript-arrow-functions)
- [JavaScript Promises](#javascript-promises)



## JavaScript Variables.
```JavaScript
var myVariable = "Hola Mundo";
saludo1  =  "Hi Team";  // Whitout VAR keyword  !!Bad programming technique!!
var salesPrice  =  8.95;				// Numeric
var totalSales  =  Sales1 + Sales2;			// Evaluating
var location  =  document.getElementById('OrigenPoint');  // From DOM


// Calling a Function & Assing its RETURN to a VAR:   ejem:   Praxis130.

var varName = functionName (arg1, arg2, arg3,  . . .  ,  argN);

// The RETURN value from FUNCTION NAME will be assingned to VARNAME.
// This code will run without the keyword VAR, but BAD PROG TECH.
```
&nbsp;  

&nbsp;  

### Functions as Variables or Values
```JavaScript
function toCentigrade(degFahren) {
	var degCent = 5 / 9 * (degFahren - 32);
	document.write(degFahren + " Fahrenheigt es " + degCent +
	" Celsius.<br />"); }
function toFahrengeit(degCent) {
	var degFahren = 9 / 5 * degCent + 32;
	document.write(degCent + " Celsius es " + degFahren +
	" Fahrenheigt.<br />"); }

function convertir(convertidor, temperature)

// toFahrengeit OR toCentigrade functions are taken as variables -or values-
and assingned to the CONVERTIDOR parameter, the second argument -a number-
passes to TEMPERATURE parameter.

{ convertidor(temperature); }    // convertidor = toCentigrade OR toFahrengeit

// In this CONVERTIR function's body we have a simple function call: CONVERTIDOR
wich has, in this runtime moment, the value (the code) of the toFahrengeit OR
toCentigrade functions, followed by the TEMPERATURE number argument.

convertir(toCentigrade, 33);   // Calling CONVERTIR with toCentigrade argument
convertir(toFahrengeit, 23);   // Calling CONVERTIR with toFahrengeit argument
```
&nbsp;  

&nbsp;  

### Variables Scope & Lifetime:
When the code inside a function ends and execution returns to the point at which  
the code was called, the variables defined within the function does NOT retain  
their value anymore.  
Variables not only have the Scope property -where they are visible- but they also  
have a lifetime. When the function finishes executing, the local variables die  
and their values are lost, unless you return one of them to the calling code.  

&nbsp;  

&nbsp;  

### SetUp Variables from Array of Return Values between Functions.
Praxis 136    
```JavaScript
function sayHello(greeting, exitStatement){
	// add some feeling
	var newGreeting = greeting + " !", newExitStatement = exitStatement + " ! !";
	// return the arguments using an array
	return [newGreeting, newExitStatement]; }

function startle(polite, rude){
	// call sayHello function with arguments polite & rude to parameters:
	// greeting & exitStatement,  then performing
	// newGreeting variable to the return array  ... index zero
	// newExitStatement variable to the return array ... index one
	
	var Gracias = sayHello(polite, rude)[0], Okay = sayHello(polite, rude)[1];
	// alert variables Gracias & Okay that have been passed through each function
	alert(Gracias + " -- " + Okay); }
	
//  call the function with two arguments defined
startle("Thank you", "Cheeers!");
```

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  

## JavaScript Functions.

#### Canonical names: PARAMETER in function declaration, ARGUMENT in function invocation.
### Function Declaration:
```JavaScript
	function functionName (width, height) {
	// Inside parenthesses place optional Parameters.
	// If a Function declaration expect some Parameter, but the Function call lacks
	// such Argument, it will output ERROR UNDEFINED.
			statements;
			return Value;  }
```
When Function Declaration do not write semicolon after curly braces, being Function
Expression it is needed!
The RETURN Value can be any local Variable inside the functionName, any number, string
or boolean.  RETURN Value it's Optional.  
&nbsp;  

If the statement starts with the function keyword, then it’s a function declaration,  
otherwise it’s a *function expression* : it will be seen later....  
&nbsp;  

The function declaration creates a ***function variable*** — a variable with the  
same name as the function name (e.g. functionName from the previous example).  
&nbsp;  


#### Invoking or Calling a Function:
		
		functionName(arg1, arg2, arg3);
		
Unlike Function Declaration or Function Expression, when calling a Function DO NOT place
a space before or between nor after parentheses:  
`sayHello();`
		
Arguments are required and always they must be in the same consecutive order of the
Parameters in the function´s declaration statement.  
If a Function declaration expect some Parameter, but the Function call lacks such
Argument, the CODE WILL RUN ANYWAY with an output ERROR UNDEFINED!

#### ¡ ¡ ¡ PARAMETERS always are considered as local variables ! ! !
		
Canonical names: PARAMETER in function declaration, ARGUMENT in function invocation.
Both can take different reference name when transferring data in between. In the next
example check that (speed, time) parameters versus numbers (12, 13) arguments are
defined with different reference names.

&nbsp;  
  
### Calling a Function & assing its return value to a DOM Id element:  
ejem:  Praxis130  &  132.  
```JavaScript
	function getDistance (speed, time) {
			var distance = speed * time;
				return distance; }
		
		showDistance.innerHTML = getDistance (12, 33);
		//   showDistance it´s a DOM element Id
```
&nbsp;  


NOTE 1: Function statements always use parentheses! Function callings NOT always!

NOTE 2: Function Hoisting: In the call stack canonical Functions Declarations
Notations are not part of the regular top-to-bottom flow of control, so the
Functions are moved to the top of the scope that belongs...  

```JavaScript
console.log("The dog says:", bark());   // Function calling above its Declaration
function bark () { return "Wuauuuu!"; }    // Runs Ok!  
```
&nbsp;  

NOTE 3: Variable declared without var, let or const keyword inside any function
becomes global variable automatically.



### Using variables as arguments to call a Function & assing its return value to another variable.  
ejem: Praxis130

Once provided user input through the DOM:  
`Cifra Promedio 1: <input type="text" id="Val-Promedio-1"><br />`
<!-- this  will  be  the  i,  j,  or  k  value :  -->
```JavaScript
var input_i = document.getElementById('Val-Promedio-1').value;   .  .  .
var i = parseInt(input_i);

function Average(a, b, c)     { var suma = a+b+c ;  var result = suma/3;
    return result; }

var returnValue = Average(i, j, k);		//    Function Average called.
```
NOTE  that  i,  j,  k  are variables too!  

***returnValue*** gets the RESULT value throught the AVERAGE's return statement.  
¡¡¡   If no RETURN statement, NO value sent to: var returnValue   !!!
```JavaScript
// Display the Promedio to the user.
document.getElementById('Promedio').innerHTML = returnValue;
// returnValue it´s the "return result" output from *Average*
```
&nbsp;  

&nbsp;  

### F U N C T I O N  &nbsp; &nbsp;  E X P R E S S I O N S
FUNCTIONS  AS  VARIABLES  OR  VALUES:  
The function expression occurs when the function keyword creates a function (with or without a name) inside of an expression const, var or object method field.  

Unlike Canonical Function Declarations that always begins with the ***function*** keyword, statements involving functions which do not start with FUNCTION Keyword are FUNCTION EXPRESSIONS.


#### SIMPLEST FUNCTION EXPRESSION
```JavaScript
var sayHello;     // variable declaration
sayHello = function ()  { console.log("Hello World"); }; // <-- last semicolon it's required!
// It is an Anonymous Function (next section)  
// Being a variable as origin statement, the semicolon  
// at the end of the function expression is required!.  
// It could be done in one step:

var sayHello = function () {  // ... ...

// depending on the statements... ; <--optional semicolon
};
// The last semicolon it's needed as it is a function expression!

// REMEMBER THE DIFERENCE WITH A FUNCTION DECLARATION:
function sayHello () { console.log("Hello World"); }
// No need semicolon when close the declaration!
```
#### To access a function created using a function expression, we need to save the function -object- into a variable!
```JavaScript
// Works!
const sum = (function (a, b) {
  return a + b;
});
sum(1, 2); // ---> 3
```

&nbsp;  

&nbsp;  

#### When functions are used only once, a common pattern is an IIFE (Immediately Invokable Function Expression).  
`(function() {  statements  })();`  
Note the Anonymous Function (next section)  

&nbsp;

Using an IIFE Function to call another Function. CUASI CALLBACK FUNCTION.  
CallBack Function: A Function that is called and executed inside another Function.  

&nbsp;
```JavaScript
function hiTeam(myWords) { document.write("<h1>Hola y Adios...: " + myWords + "</h1>"); }
 // Hola y Adios...: Carpe Diem
 // Hola y Adios...: Ciao... Bye

(function (){
		var hello = "Carpe Diem", finish = "Ciao... Bye";
		hiTeam(hello);
		hiTeam(finish);
})();			// hiTeam is a CallBack Function
```  
&nbsp;

### Functions that renders as Variables or Values . . .

```JavaScript
const myObject = {
  myMethod: function() { return 42;  // object method field
  }
};
// myMethod  &  myObject  are both function expressions.
```

&nbsp;  

Ejem. Praxis 133  
```JavaScript
function toCentigrade(degFahren) {
	var degCent = 5 / 9 * (degFahren - 32);
	document.write(degFahren + " Fahrenheigt es " + degCent + " Celsius.<br />"); }
	
function toFahrengeit(degCent) {
	var degFahren = 9 / 5 * degCent + 32;
	document.write(degCent + " Celsius es " + degFahren + " Fahrenheigt.<br />"); }

function convertir(convertidor, temperature)

// toFahrengeit OR toCentigrade functions are taken as variables -or values- and
// assingned to the CONVERTIDOR parameter, the second argument -a number- passes to
// TEMPERATURE parameter.

{ convertidor(temperature); }    // convertidor = toCentigrade OR toFahrengeit

// In this CONVERTIR function's body we have a simple function call: CONVERTIDOR
// wich has, in this runtime moment, the value (the code) of the toFahrengeit OR
// toCentigrade functions, followed by the TEMPERATURE number argument.

convertir(toCentigrade, 33);   // Calling CONVERTIR with toCentigrade argument
convertir(toFahrengeit, 23);   // Calling CONVERTIR with toFahrengeit argument
```
&nbsp;  

&nbsp;  

### A N O N Y M O U S  &nbsp; &nbsp;  F U N C T I O N S
An Anonymous Function is an EXPRESSION not a DECLARATION, so UNLESS they are  
Callbacks or Event Handler, they are always assignements and get bound to a  
Variable Name.

#### Anonymous Function Expression:
`var myFunction = function() {   statements   };`

&nbsp;  

`var myfunc = function() { alert('This is anonymous'); };`

&nbsp;

#### Named Function Expression:
`var myFunction = function niceName() {   statements   };`
When possible, it's better working with named functions in order to  
find the origin of any error in the debugger or console stack trace.  

&nbsp;  

#### Anonymous Function as Event Handler when using a JavaScript built in Method...
for instance: AddEventListener.
```JavaScript
var dumpOrder = document.getElementById("submitButton");
dumpOrder.addEventListener("click", function() {
window.alert("Thanks for your order! We appreciate you."); }, false);
```
&nbsp;  

#### Anonymous Function bound to a Method Name, via Object Notation Constructor:
```JavaScript
	var order = {
		items: { item1:"KJ24", price1:2.95, item2:"AW23", price2:4.99 },
		generateInvoice: function() { /* function statements */  }
		};
	// To call the Object Property generateInvoice() Method we can use:
			order.generateInvoice();   // Note the Parenthesses

// Although generateInvoice renders as Method Name, strictly speaking the
Anonymous Function it's the Value of the generateInvoice OBJECT PROPERTY Name.
```
&nbsp;  

&nbsp;  

### Function as Object Property Value.
Property Name: Method Name.  
Property Value: Reference to included Function (usually anonymous).  
or Early Existing External Function.  

&nbsp;  

Given such Early External Function Declaration:  
```JavaScript
function OrderA() {alert('Price Two: ' + stockToSend.items.price2);}

var stockToSend = { myOrders: OrderA, // myOrders(method name)..... OrderA(method value)
// When OrderA function is called no parentheses or quotes are used!
	items: { item1:"KJ24", price1:2.95, item2:"AW23", price2:4.99} };
	
	// To call the Object Property Name myOrders() as Method,
	// whose Property Value is the Function reference OrderA (method value), use:
	
	//  Note the parenthesses to fetch myOrders ...
stockToSend.myOrders();
```

#### Variables declared without var, let or const keyword inside any function becomes global variables automatically.

&nbsp;  

&nbsp;  

### U S I N G  &nbsp;  A R R A Y S  &nbsp;  T O   P U T  &nbsp;  M U L T I P L E  &nbsp;  R E T U R N  &nbsp;  V A L U E S
```JavaScript
var customCar, carOutPut, myCarA, myCarB;
customCar = function (name, year, color, price, engine) {
	let modelo = year; let nombre = name; let precio = (price+50000);
		return [ modelo, nombre, precio ] ;
	};

	myCarA = customCar("Mustang", 2002, "Rojo", 650000, "V8 4.0");
	myCarB = customCar("BMW 500", 2006, "Navy", 900000, "V6 3.0");

	carOutPut = function (newCar) { 
	return "Nombre: " + newCar[1] + `   Año: ${newCar[0]}` + "    Precio: "
	+ newCar[2] };

console.log(carOutPut(myCarA));
console.log(carOutPut(myCarB));
```
&nbsp;  

&nbsp;  

### Custom Object Constructor Functions.  No parameters.   part  1  of  3.
Used to instantiate objects without define them;  i.e. NO VALUES.  

NOTE. There is the Default Generic Object Constructor: Object();  
	  that uses the next sintax:  
	  var MyObject = new nameOfTheObject(); &nbsp; No uses the FUNCTION constructor
```JavaScript
function Item()  {this.color = undefined; 	
	 //   Item() ... The Custom Constructor Function Name
		this.count = 0;      //zero
		// an anonymous Function that renders as object ...
		this.log = function() { console.log("Quantity: " + this.count + ", Color: "
		+ this.color); }; }
					
	//   So we can create more Objects using the Item()  constructor:
		 var MyObject = new Item();

	//   Then coding to set property names & values: 
		MyObject.color = "Red";
		MyObject.count = 5;
	
	//   As well as call any function inside the constructor:  
		MyObject.log();	//    CONSOLE OUTPUT:  Quantity: 5, Color: Red
```
&nbsp;  

&nbsp;  

### Custom Object Constructor Functions with Parameters.  part 2 of 3.
ejem:  Praxis134  

NOTE. There is the Default Generic Object Constructor: Object();
	  that uses the next sintax:  
	  `var MyObject = new nameOfTheObject();` &nbsp; No uses the FUNCTION constructor  
#### Having the next button:
	`<button type="button" id="getItems">Show Items !</button>`
&nbsp;  
```JavaScript
	//  If function was called with no parameters, must to handle. . .

function Item(color, count)	{
	// Handle missing parameters in next two lines...
	if (color == undefined) {this.colorOk = "Black";}
	if (count == undefined) {this.countOk = 0;}
	this.colorOk = color + " No Great!";
	this.countOk = count + 3;
	//  First Anonymous Function . . . 
	this.toDOM = function() { ItemsOk.innerHTML = ('<h1>' + 'Quantity: ' + this.countOk +
	', &nbsp; Color: <span style="color:blue">' + this.colorOk + '</span>');
	return alert ("Hi There"); }
}

//  Creating Objects using the Custom Item() constructor & attaching arguments: 
var showObjects = new Item("Blue", 9);

// Calling toDOM Object (method) & bind its action to the next anonymous function, so
// we can call it as a function value (var) when clic the getItems button.
// NOTE that we are using a second Anonymous Function and CALLING a Function inside
// another Function.
var a = function() { showObjects.toDOM() };
getItems.onclick = a;

/*  T H I S    I S    O K E Y    without    B U T T O N    */
// var showObjects = new Item("Blue", 9);
// showObjects.toDOM();
```
&nbsp;  

&nbsp;  

### Custom Object Constructor Functions with Parameters       part 3 of 3.
that CONTAINS METHODS defined as Objects.	        ejem:  Praxis135  
Important: Althought it is possible create & call very simple methods via anonymuos functions as done in this.Log or this.toDOM functions, it's better and efficient to use the following technique in order to wrangle multiple and more complex methods.  CENGAGE JAVA SCRIPT WEB WARRIOR 6Ed  PAG. 511.   

`<div id="summarySection"></div>`  

Custom Object constructor function creates showOrder Method as Object, that is being assigned to the displayOrderInfo external function.  
&nbsp;  

NOTE. There is the Default Generic Object Constructor: Object();  
	  that uses the next sintax:  
	  var MyObject = new nameOfTheObject(); &nbsp; No uses the FUNCTION constructor  
```JavaScript
function Order(number, order, payment, ship) {
	this.customerNumber = number;
	this.orderDate = order;
	this.paymentMethod = payment;
	this.shippingDate = ship;
	this.showOrder = displayOrderInfo; }  // displayOrderInfo --> External Function
	// Proper syntax...  this.methodName = functionName;
	// displayOrderInfo definition does NOT include parenthesses.  It's an OBJECT !

// displayOrderInfo function that will be used as an Object METHOD	
function displayOrderInfo() {
	var summaryDiv = document.getElementById("summarySection");
	summaryDiv.innerHTML += ("<p>Customer: " + this.customerNumber + "</p>");
	summaryDiv.innerHTML += ("<p>Order Date: " + this.orderDate.toLocaleString() + "</p>");
	summaryDiv.innerHTML += ("<p>Payment: " + this.paymentMethod + "</p>");
	summaryDiv.innerHTML += ("<p>Ship Date: " + this.shippingDate.toLocaleString() + "</p>"); }

//  Creating Objects using the Custom Order() constructor & attaching arguments:
	var shoppingBasket = new Order("KJ2435J", new Date(2017, 6, 17),
	"visa", new Date(2017, 6, 18));

//  The Method showOrder that is defined as object property of Order() and contains
//  the arguments of shoppingBasquet, will call the displayOrderInfo function.
	shoppingBasket.showOrder();
```

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  


## JavaScript Objects and Methods
JavaScript Buid-in OBJECTS:  
Array, Boolean, Date, Function, Math, Number, RegExp, String  
```JavaScript
// Built in Methods & Properties Example:
	var r = document.getElementById("Radius").value;
	var area = Math.PI * Math.pow(r, 2);
		return area;
```
Where...  
	-Math- is a JavaScript built in object.  
	-PI- is a Math's object property !Has a value!  
	-pow- is a Math's object method.  

#### Objects in JavaScript are certain type of variable, then use VAR keyword to identify them as variables, so variable names represents objects.

&nbsp;  

### Objects Types
```JavaScript
// A R R A Y
var names = ["Jerry", "Mac", "Paul"]; //Literal notation object Array constructor
var names = new Array("Jerry", "Mac", "Paul");  // Using the constructor 'new'	

// O T H E R S
	var today = new Date();   // Using the constructor 'new'
	var roundNumber = Math.round("3.14"); // NOTE: some JS build-in objects does
				      // not have the constructor 'new'
	var hello = new String("Hello!");


// Literal Notation Object Constructor...
	var book = { title: "Paramo", datePub: 1942, author: "Rulfo" };
		// Final property name & property value has no comma after it


// Creating an EMPTY generic object via literal notation:
		//	First declare a variable by using the -var- keyword:
				var book;
		//  Later create an object by using curly braces & assign it to the variable:
				book = { };		// must have a final semicolon as being a variable element
	
		// In short it could be...   // both are empty objects with no properties.
				var totalPay = { };
```

#### DECLARING AN OBJECT  vs CREATING AN OBJECT...  
`objectName = new PrototypeName(args...);`  
`var order = new Object();   same as:   var order = { };`  

In an Object Construction via Literal Notation: A Method (name) is an Object that carries an included function or existing external function as its property value.

Let's use suchs functions to declare a Method (name & value) in an object construction via literal notation...  
`<h1>Hi Twice...</h1>`  
```JavaScript
// Setting functions as properties of an object.
// Given the next object...
var HiTwice = {};
// Add properties ...
HiTwice.one = function() { alert( "Hi First Time" ); };
HiTwice.two = function() { alert( "Hi Second Time" ); };
	// function() { alert( "Hi First Time" ); }; ---> Method value
	// function() { alert( "Hi Second Time" ); }; ---> Method value
HiTwice.one(); // Method name
HiTwice.two(); // Method name



// In the next example both objects carries included (anonymous) functions...
// We can also consider it like "Functions as Object Literals"
var HelloMethods =
	{ sayHello: function(message) { return message + "sayHello"; },
							
	 startle: function() {
		alert(HelloMethods.sayHello("Hey there from Method ") + ". . . Bye"); }
	};
	
// Calling STARTLE object as method (strictly speaking know as method name), through
// its variable name: HelloMethods...

HelloMethods.startle();

// The STARTLE object property value (method value) it's a function, with an ALERT()
// that inside will call another function: sayHello
```
`<h1>Hi Team!</h1>`  

&nbsp;  

#### Example that references an early existing external function.
```JavaScript
function checkTickets() { alert("Many Tickets") }
var seats = {
				spaces: {  },
// method value references an early existing external function...
				howMuchTickets: checkTickets,
				
				itemDescription: "Very nice color!"
			};
// Despite it is a function call, there is not parentheses after the
// value: checkTickets
// Unlike as the syntax for declaring an object property value, the
// referenced value (function name) is not inside quotes.

seats.howMuchTickets();
```
&nbsp;  

&nbsp;  

#### Another example that it is worth to check... taken from
FUNCTIONS.HTML  File ...  

Function as Object Property Value.  
Property Name: Method Name.  
Property Value: Reference to included Function (usually anonymous) or Early Existing External Function.  
```JavaScript
// Given such Early External Function Declaration:
function OrderA() {alert('Price Two: ' + stockToSend.items.price2);}

var stockToSend = { myOrders: OrderA, // myOrders(method name)..... OrderA(method value)
// When OrderA function is called no parentheses or quotes are used!
	items: { item1:"KJ24", price1:2.95, item2:"AW23", price2:4.99} };
	
	// To call the Object Property Name myOrders() as Method,
	// whose Property Value is the Function reference OrderA (method value), use:
		
	//  Note the parenthesses to fetch myOrders ...
stockToSend.myOrders(); // Price Two: 4.99
```
&nbsp;  

&nbsp;  



```JavaScript
//  /  /  /  /  /  Object   Properties  Reference   /  /  /  /  /  /  /
// In JavaScript, property reference binding needs be done direct and explicit!
var juan = {
  name: 'John',
  greet: function(person) {
    console.log("Hi " + person + ", my name is " + this.name); // ONLY *name* without *this* ---> FAILS
  }
};
// this.name  or  juan.name Works!
juan.greet("Mark");

	
//  /  /  /  /  /   Custom Object Instances   /  /  /  /  /  /  / 

function Item()  {
   this.color = undefined; 	
   this.count = 0;
   this.log = function() { console.log("Quantity: " + this.count + ", Color: " + this.color + '\n' + this.year); };
   }
	
   var MyObject = new Item();
   MyObject.color = "Red";
   MyObject.count = 5;
   MyObject.year = 3333;  // Adding a property. Same could be done
   		//through *Item.prototype.year = 3333*
 
   MyObject.log(); //  Quantity: 5, Color: Red 2222

// var MyObject = new item()... Build *custom object instances* to gain
// access for change, add or handle that object's properties.
// When the custom object instance as a function call: *new Item(x, y, z)*, 
// includes arguments, becomes an *Object Constructor Function*.
```
&nbsp;  

&nbsp;  

#### Passing an Object (name & value) to a Function as an Argument.
(JavaScript Encapsulation Basics).
The simplest form...  
```JavaScript
//  Being the next object:
	var alumni;
	alumni = { name: "Paola", group: "A", section: 9 };

function myFunction(objetoA, objetoB) { 
	alert('Object -name- value: ' + objetoB + '    ' +
	'Object -section- value: ' + objetoA); } //

// To call myFunction passing only SOME -alumni- object
// properties (values) as Arguments we could write:
	myFunction(alumni.section, alumni.name);
```
&nbsp;  

&nbsp;  

```JavaScript
// Passing an Object to a Function as an Argument.
// JavaScript Encapsulation Basics.
// See fourther about Encapsulation in the Promises & Thenables section.

// Being the next object:
	var alumni;
	alumni = { name: "Paola", group: "A", section: 9 };

// To call myFunction passing ALL -alumni- object properties as
// Arguments we could write:
	myFunction(alumni.name, alumni.group, alumni.section);

// But it is better & easier to write:
	myFunction(alumni);  	// this will include ALL the alumni's
					// properties object.
// So when you need only one or few properties, use the first
// sintax described:
	myFunction(alumni.group);   // or
	myFunction(alumni.group, alumni.section);

// In a Object Literal Notation, when including ALL properties in the 
// wrangling, that process it is known as ENCAPSULATION or ENCAPSULATING
// See fourther about Encapsulation in the Promises & Thenables section.
```
&nbsp;  

&nbsp;

### Functions to setting up objects (using object literal notation)
from an EMPTY generic object via ADDING PROPERTIES NAMES & VALUES
```JavaScript
var buildPlanet = function create (nombre, lugar, tipo) { 
	var planet = {}; // EMPTY generic object creation
	planet.titulo = nombre;   	// Add new property names (titulo, position, type)
	planet.position = lugar;	// to  the "planet" object
	planet.type = tipo; 		// and implicit values ("Jupiter", 5, "Gas Giant")
			console.log(planet); }
buildPlanet("Jupiter", 5, "Gas Giant");
// OutPut: { "titulo": "Jupiter", "position": 5, "type": "Gas Giant" }
// "buidPlanet" Does Not create any object, simply build such
// property name & values from the function's send arguments.
// Actually the object is created by the function "create"
// when reaches: var planet = {};
// We can omit the name "create" in order to have an Anonymous Function
```
&nbsp;  

#### A N O T H E R &nbsp; &nbsp;  E X A M P L E . . .
```JavaScript
var buildPlanet = function (nombre, lugar, tipo) { 
	var planet = {}; // EMPTY generic object creation
	planet.name = nombre; planet.position = lugar; planet.type = tipo;
// Now we add a new property name: showPlanet & a method (function)
// as its value, the next anonymous function...
	planet.showPlanet = function () { 
		var info = planet.name;
		info += ": planet " + planet.position; 
		info += " - " + planet.type; 
		console.log(info); }; 
	} ;
var planet1 = buildPlanet("Jupiter", 5, "Gas Giant");
var planet2 = buildPlanet("Neptune", 8, "Ice Giant");
var planet3 = buildPlanet("Mercury", 1, "Terrestrial");
planet1.showPlanet(); planet2.showPlanet(); planet3.showPlanet();
```
&nbsp;  

&nbsp;  

### Changing Object's properties that was passed to a Function as Argument.
```JavaScript
/* When we pass an Object to a Function as an Argument, the code
in the Function body has acces to the object's properties. It
can read them, change them, delete them and can add new properties
too!
Given such Object: */
var topTen = { name: "México", population: 129940000, continent: "America" };
var countryStats = function (initialData) {
			var pop = initialData.population;
	// Add a new property to the -initialData-  (topTen) object:
			initialData.popdensity = pop/1973000; };
	// 1973000 : Nation wide extension sqr kilometers
var displayStats = function (finalData) {
		console.log(finalData.name);
		console.log("Densidad de Población = " + finalData.popdensity +
					" habitantes por kilometro cuadrado"); };
	// Calling both Functions taking care of the proper order:
	countryStats(topTen);	// As soon as finishes this function execution,
				// the topTen object has been modified with a new
				// property added: topTen.popdensity
	displayStats(topTen);

/*  N O T E  that the code shows initialData.popDensity,
because it is the name of the function parameter input: initialData.
The same applies to the function displayStats wich is being used
as parameter -finalData- input.
Finally we can see the updated -topTen- object showing its total
properties names & values, using the next browser line command
or inspector option:
Choose the -Console- Tab & type: console.log(topTen)  ...Enter
You can see:
{ name: "México", population: 129940000, continent: "America", popdensity:
65.8590978205778 }   */
```
&nbsp;  

&nbsp;  

#### U S I N G  &nbsp;  O B J E C T S  &nbsp;  T O &nbsp;  P U T &nbsp; M U L T I P L E &nbsp;  R E T U R N  &nbsp;  V A L U E S  &nbsp;
```JavaScript
var customCar, carOutPut, myCarA, myCarB;

customCar = function (name, year, color, price, engine) {
		return { motor: engine+" Litros", year, color, precio: "$"+
		(price+(price*((0.16*10)/10))) +" IVA incluido", name } ;
	};
// NOTE the use of the Enhanced Object Literal Notation syntax, that allow 
// us to avoid the repetitive writing of name: name, year: year, color: color.
// When needed we can change the  position and name: motor & precio.

	myCarA = customCar("Mustang", 2008, "Rojo", 650000, "V8 4.0");
	myCarB = customCar("BMW 500", 2010, "Navy", 900000, "V6 3.0");
	
	carOutPut = function (newCar) { return newCar.name.toUpperCase() +
	`   Año = ${newCar.year}` +  "   Kolor: " + newCar.color +
	`    Motor = ${newCar.motor}` + "   Precio: " + newCar.precio };

console.log(carOutPut(myCarA));
console.log(carOutPut(myCarB));
```
&nbsp;  

&nbsp;  

#### USE FUNCTION'S RETURN TO HANDLE & PUT MULTIPLE OBJECT VALUES.
```JavaScript
var year2000, year2005, year2010, calcPopChange, showResult;

calcPopChange = function ( yearInit, yearEnd ) {
		return { female: yearEnd.female - yearInit.female, 
				 male: yearEnd.male - yearInit.male } };

	year2000 = { female: 4400000, male: 4085000 };
// Combining Variables & Objects inside function´s Arguments:
	year2005 = calcPopChange ( year2000, { male: 4250000, female: 4600000 } );
	year2010 = calcPopChange ( year2000, { female: 4850000, male: 4535000 } );
// NOTE that we can change the position of the Objects but not the position
// of the Arguments sent to the calcPopChange function!

showResult = function (resultData) {
	console.log( 
	"Females:" + resultData.female + "     Male: " + resultData.male ) };
	
console.log("Population @ 2000 Year:");
showResult(year2000);
console.log("Population change from 2000 to 2005: ");
showResult(year2005);
console.log("Population change from 2000 to 2010: ");
showResult(year2010);
```
&nbsp;  

&nbsp;  

#### C U S T O M &nbsp; &nbsp; O B J E C T S   (Object Constructor Functions)
```JavaScript
// As a convention syntax, name an Object Constructor Function with first
// capital letter.
var Puerto = function (name, country, ranking) { 
// NOTE that an empty generic object: var = this {}; is automatically created! 
	this.nombre = name; this.pais = country; 
	// Since we have the -this- object created, we can add properties to it...
	this.posicion = ranking; this.contacts = []; 
	this.contactData = function (portData) { this.contacts.push(portData); }; 
	this.showPlanet = function () { 
		var info = "Nombre: " + this.nombre + "        País: " + this.pais; 
		info +=  "        Número: " + this.posicion; 
		console.log(info); 
		// Apply a basic array method inside console.log
		console.log("Contact Info...    " + this.contacts.join('  ,      ') 
		+ " .");
	};
		// Without the var keyword we're declaring -leyenda- as global
		// variable, so we can call it outside this anonymous function...
	leyenda = [ this.nombre, ",", this.pais, ",", this.posicion ].join("|||||");

	// NOTE that there is not -return- keyword!
	
// Despite not displayed, Javascript sends automatically the -RETURN- value containing
// the whole object that has been builded, including the Array method.
// To check the result type the next browser line command... console.log(puerto3)  ... Enter
};
	var title = "Top world container ports: " + "\n";
	console.log(title);
	
	// As soon as -puerto1- expression call -Puerto- object constructor function,
	// only will get generated the -leyenda- var. No -contactData- neither 
	// -showPlanet- methods will be fetched!
	var puerto1 = new Puerto( "Campo 1: Nombre     ", "  Campo 2: País      ",
	"   Campo 3: Ranking.");
	console.log(leyenda);
	
	// The next three instances invoques -Puerto- Object constructor function and
	// -contactData- method (two times) to generate two values in the -this.contacts-
	// array. Finally it will call the -showPlanet- method.
	var puerto2 = new Puerto( "Shanghai", "China", 1 ); 
	puerto2.contactData("Email: @shanghaiport.com"); 
	puerto2.contactData("Phone: 666-222-333"); 
	puerto2.showPlanet();
	
	var puerto3 = new Puerto( "Singapore", "Singapore", 2 ); 
	puerto3.contactData("Email: @singaporeport.com"); 
	puerto3.contactData("Phone: 567-844-111"); 
	puerto3.showPlanet();
// Since JavaScript is a Dynamic Type Language, the third argument unlike -puerto3-
// it is a String...
	var puerto4 = new Puerto( "Busan", "South Korea", "Tres" ); 
	puerto4.contactData("Email: @busanport.com"); 
	puerto4.contactData("Phone: 333-111-222"); 
	puerto4.showPlanet();
```
&nbsp;  

&nbsp;  

### Custom Object Instances
```JavaScript
function Item()  {
   this.color = undefined; 	
   this.count = 0;
   this.log = function() { console.log("Quantity: " + this.count + ", Color: " + this.color + '\n' + this.year); };
   }
	
   var MyObject = new Item();
   MyObject.color = "Red";
   MyObject.count = 5;
   MyObject.year = 3333;  // Adding a property. Same could be done through *Item.prototype.year = 3333*
 
   MyObject.log(); //  Quantity: 5, Color: Red 2222

// var MyObject = new item()... Build *custom object instances* to
// gain access for change, add or handle that object's properties.

// When the custom object instance as a function call:
// *new Item(x, y, z)*, includes arguments, becomes an *Object
// Constructor Function*.
```
&nbsp;  

&nbsp;  











FROM THE GET PROGRAMMING MANNIG BOOK, POINT TO Chapter 9  

SEE: Object Destructuring Assignment  


&nbsp;  

&nbsp;  

### Methods or Functions Chaining!
#### Handling Encapsulated Objects
```JavaScript
const greatAuthor = {
  aSong: null,
	
  logMelody() { console.log(greatAuthor.aSong); },
	
  	mozart() {    
  // From ECS6 enhacements that includes *Object property initializer
  // shorthand*, *Construct an object literal from local variables*,
  // *Computed property name*
  // that uses the *Square bracket notation*, we are using right here the
  // *Concise method syntax* by removing the colon (:) and the *function* keyword.
    	greatAuthor.aSong = "Tenth Symphony!";
    	greatAuthor.logMelody();
    	return greatAuthor;   // The *return* reference it is necesary to pass all
	// *greatAuthor* encapsulated object to the next METHOD CHAINING or FUNCTION CHAINING.
  },

  vivaldi() {
    greatAuthor.aSong = "Four Seasons!";
    greatAuthor.logMelody();
    return this;  // NOTE: The object's explicit name can be switched to *this*
  },
	
  liszt() {
    greatAuthor.aSong = "Intermezzo!";
    greatAuthor.logMelody();
    return greatAuthor;
  }

};
// Each chained Method can be called in any secuencial order.
greatAuthor.mozart().liszt().vivaldi();
```

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  


## JavaScript CallBacks.
#### C U A S I  &nbsp; &nbsp;  C A L L B A C K  &nbsp; &nbsp;  F U N C T I O N
```JavaScript
// When functions are used only once, a common pattern is an IIFE (Immediately Invokable Function Expression).
(function() {  statements  })();  </script>
		<!-- Note the Anonymous Function -->  

	/* Using an IIFE Function to call another Function.
	CallBack Function: A Function that 	is called
	and executed inside another Function */

function hiTeam(myWords) { document.write("<h1>Hola y Adios...: " + myWords + "</h1>"); }
 // Hola y Adios...: Carpe Diem
 // Hola y Adios...: Ciao... Bye
(function (){
		var hello = "Carpe Diem", finish = "Ciao... Bye";
			hiTeam(hello);
			hiTeam(finish);
})();		// hiTeam is a CUASI CallBack Function
```
&nbsp;  

#### Some information to know about callbacks in general:

The function you send in to a function as a callback may be called zero times, once, or multiple times.
The callback function may be called synchronously or asynchronously and possibly both synchronously and asynchronously.

&nbsp;  

#### SYNCHRONOUS  &nbsp;  CALLBACK  &nbsp;  FUNCTIONS
```JavaScript
// A function that uses a callback named `cb` as a parameter
function getSyncMessage(cb) {
	// Calling the cb function
    cb("Hello Team!"); // hence *message* parameter becomes Hello Team *argument*
}

console.log("Before getSyncMessage call");
// Sending in an anonymous callback function as an argument:
getSyncMessage(function(message) {
    console.log(message);
});
console.log("After getSyncMessage call");
```
O U T P U T :  
Before getSyncMessage call  
Hello Team!  
After getSyncMessage call  

&nbsp;  

### UNDERSTANDING CALLBACKS IN THREE STEPS:
#### THE &nbsp; SEQUENCE &nbsp; CONTROL
#### We need control over when to execute a function.  
STEP 1. We will call a calculator function (myCalculator), save the  
result and then call another function (myDisplayer) to display  
the result:  
```JavaScript
function myDisplayer(some) {
   document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2) {
	let sum = num1 + num2;
	myDisplayer(sum);
}
myCalculator(5, 6);
```
&nbsp;  

STEP 2. Leveraging an EXPRESSION to call another function:

```JavaScript
function myDisplayer(some) {
   document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2) {
	let sum = num1 + num2;
	return sum;
}
let result = myCalculator(5, 6);
myDisplayer(result);
```
&nbsp;  

STEP 3. A callback is a function passed as an argument to  
another function. Using a callback you could call the calculator  
function (myCalculator) with a callback, and let the calculator  
function run the callback after the calculation is finished:  

```
function myDisplayer(some) {
   document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
}
myCalculator(5, 6, myDisplayer);
```
`myDisplayer` &nbsp; is the name of a function. It is passed  
to &nbsp; `myCalculator()` &nbsp; as an argument.  
When pass a function as an argument remember not to use  
parenthesis:  &nbsp; `myCalculator(5, 6, myDisplayer)` .  
Okay!  

_  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  _  

&nbsp;  

&nbsp;  

#### M O R E &nbsp; &nbsp; C A L L B A C K S  &nbsp; &nbsp;  E X A M P L E S
```JavaScript
function add(a, b, callback) { // function declaration
  suma = callback(a + b);  // function execution to spawn *Result: 8* 
}

console.log('before');
add(5, 3, function(suma) {
		console.log('Result: ' + suma);
	});
console.log('after');



//  #   #   #   #   #   #   #   #   #   #   #



function add (equis, y) {
  return equis + y;
}
function addFive (x, addReference) {
  console.log("The Cat says: ", add(10, 10)); // 20
  return addReference(x, 5); // 15
}
console.log("The Dog says: ", addFive(10, add)); // 15

// USING  FAIRLY  WORDS  TO  NAME  EACH  FUNCTION  ELEMENT:

function add (equis, y) {
  return equis + y;
}
function higherOrderFunction (x, callback) {
  console.log("The Cat says: ", add(10, 20)); // 30
  return callback(x, 5); // 15
}
console.log("The Dog says: ", higherOrderFunction(10, add)); // 15
```
&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  


## JavaScript Arrow Functions.

#### Arrow functions are always anonymous, so they must be assigned to an expression reference like: VAR, CONST or LET.

Given the next Anonymous Function:  
	`var sayHello = function () { alert("Hello"); };`  

The same in Arrow Notation:  
	`var sayHello = () => alert("Hello");`  

Even no exists parameters need parentheses though! Note that there is not FUNCTION keyword.
Use curly braces only where more than one expression is included in the main body.

If only one parameter, parentheses aren't required...  
	`var myFunc = x => alert(x);  
		const sumTwice = x => x+x;`  

Example with two parameters:  
	`var myFunc = (x, y) => alert(x+y);  
	const multTwo = (a, b) => a * b;  
	var imc = (peso, estatura) => peso/(estatura*estatura);`  
*imc indice de masa corporal  

All above Arrow function's body are know as implicit RETURN statement or value; i.e.: when only
one expression is evaluated, the return output is IMPLICIT, so we don't need the RETURN keyword
nor curly braces.  
When using any special parameters, just wrap the parameters in parentheses.  
Use curly braces only where more than one expression is included in the main body.  
  
  
&nbsp;  

  
MULTIPLE ARGUMENTS, MULTIPLE STATEMENTS, EXPLICIT RETURN:  
```JavaScript
	var cuadratic = (a,b) => {
		if ( a!=0 && b!=0 )
			{ return a*b; } };
	console.log( cuadratic(3,3) );   // 9 
```
&nbsp;

INCLUDING DEFAULT PARAMETERS:  
If the arrow function has one parameter with a default value, you must keep the parentheses:  
```JavaScript
	const hiTeam = (who = 'Vikings') => {
	return `${who}, Welcome!`; };
	hiTeam();       // "Vikings, Welcome!"  
```
&nbsp;

IMPLICIT RETURN BEING OBJECTS LITERALS  
When an object literal is output as implicit return, must be wrapped in parentheses.  
	`var thatObjects = () => ({ name: 'foo', nick: 'bar' });`  

&nbsp;  


Given the next object notation...
`const person = { first:'Peter', last:'Bagge', city:'Seattle', state:'Washington', };`

If using any special parameters, just wrap the parameters in parentheses. Also when return a value  
using parentheses, that can render an *implicit* return with multi-line items while still omitting  
the return statement:  
```JavaScript
	const nameAndLocation = ({ last, city, state, first }) => ({  
		fullName:`${first} ${last}`, location:`${city}, ${state}`, });  
		console.log( nameAndLocation(person) );
```
O U T P U T :  
	{ 	
		fullName: 'Peter Bagge', 
		location: 'Seattle, Washington'
	}

&nbsp;  


When using destructured parameters, must also keep the parentheses around too!...
```JavaScript
	const cars = { ford: 'Mustang', nissan: 'Tsuru' };
	const arrowCars = ({ nissan }) => {
		return `${who}, the cheaper!`; };

arrowCars(cars);   // Tsuru, the cheaper!
```

&nbsp;  

#####  ARROW FUNCTION INSIDE ANOTHER FUNCTION :
```JavaScript
	const num = [1,2,3];
	
	/* Standard Notation: */
	const squares = num.map(function(n) { return n*n; });

	/* Arrow Notation:  */
	const squares = num.map( n => n*n);
	/* No Function nor Return keywords */
	
	/* Both figure same outputs: */
	console.log(squares);    //  [1, 4, 9]
```

&nbsp;  

#####  ARROW FUNCTIONS TO RENDER INMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs)
```JavaScript
let person = function(name) {
	return {
		getName: function() { return name; } };
				}("Nicholas");
	console.log(person.getName());      // "Nicholas"

// The same thing using Arrow function, as long as we wrapp the entire Arrow function in
// parentheses:
let person = ((name) => {
		return {
			getName: function() { return name; } };
				})("Nicholas");
		console.log(person.getName());      // "Nicholas"
```

&nbsp;

#####   USING ARROW FUNCTIONS WITH ARRAYS
```JavaScript
	// Traditional way ...
	var result = values.sort(function(a, b) {
			return a - b; });
	
	// Arrow Function way ...
	var result = values.sort((a, b) => a - b);
	
	// The array methods that accept callback functions, such as sort(), map(), and
	// reduce(), can all benefit from this simpler syntax!
```

#### Arrow functions are great ways to make 'higher-order functions': functions  that  return  other  functions.

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  

&nbsp;  

## JavaScript Promises.
#### Simple Examples:
```JavaScript
let done = false;
const isItDoneYet = new Promise((resuelto, negado) => {
  if (done) {
    const workDone = 'Here is the RESUELTO thing';
    resuelto(workDone);
  } else {
    const why = 'Still working on something else';
    negado(why);
  }
});
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
checkIfItsDone();
```

&nbsp;  


```JavaScript
const myPromise = new Promise( ( resolve, reject ) => {
  console.log( 'Starting asynchronous work!' );
	setTimeout( () => { 
	resolve( 'Cheers from myPromise ' ); 
	reject( new Error ( 'Promise was rejected!' ) );
	}, 3000 );
} );
function apiCall_A( myPromiseResult ) { 
 return new Promise( ( resolve, reject ) => {
    resolve( anuncio = myPromiseResult + '& apiCallA' );
  } ); }
function myBrowser( apiCallAResult ) { 
  return new Promise( ( resolve, reject ) => {
				function getDistance (speed, time) {
					let distance = speed * time;
						return distance; 
				}
				function calcDistancia (veloz, tiempo) {
					let distancia = veloz * tiempo;
						return distancia; 
				}
			returnDistancia = ' & Distancia = ' + calcDistancia(2, 10);
		resolve( returnDistance = getDistance(2, 3), returnDistancia  );
  } ); }
function myServer( myBrowserResult ) {
	return new Promise( ( resolve, reject ) => {
		resolve( '   Server Working.........   ' );
	} ); }
function apiCall_B( myServerResult ) { 
  return new Promise( ( resolve, reject ) => {
    resolve( myServerResult + ' & apiCallB. Distance: ' ); // this value gets store in *finalresult*
  } ); }
myPromise.then( apiCall_A ).then( myBrowser ).then( myServer ).then( apiCall_B )
.then( finalresult => console.log( anuncio + finalresult + returnDistance + returnDistancia ) )
.catch(Error) ;
```


&nbsp;  

&nbsp;  


#### The early adoption of encapsulation.
```JavaScript
exploitDetails = function(drone, game) {
return "Game name: " + game.name + " , Drone Model: " + drone.model + ",
Drone Brand: " + drone.brand + ", Engines: " + drone.engines + ", Color: "
+ drone.color + ", and Players in Baseball: " + game.players; }

console.log(exploitDetails({model: "Pulsar Q55", brand: "AFlight",
engines: 4, color: "Blue"}, {name: "Baseball", team: "Caneks",
players: 9}));
```
Although the above snippet works okay it is better to encapsulate the data (and methods) through the required variables. Use each ***var*** as a single object to wrap all the collection.
```JavaScript
var encapsulate1 = {
	model: "Pulsar Q55",
	brand: "AFlight",
	engines: 4,
	color: "Blue"
	};
var encapsulate2 = {
	name: "Baseball",
	team: "Caneks",
	players: 12
	};

// Hence there is few arguments to call the function:
console.log(exploitDetails(encapsulate1, encapsulate2));
```
&nbsp;  

```html
<h1>Promises and Encapsulation Test</h1>
<h2 id="display1"></h2>
<script>
var object1 = {   // JSon Array of Strings
	"courses": [
	 	{
	 	"updateTime": "2019-07-15T16:01:45.755Z", 
      "guardiansEnabled": false, 
      "name": "Matem\u00e1ticas 1 A", 
      "alternateLink": "https://classroom.google.com/c/MzIDkxDFa", 
      "enrollmentCode": "qrnq", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFFwTkRNktKWWNRLA3Mmpx6c2RUUEE", 
        "id": "0B3QTFFwTXGKYfkRCVEFNRLWY3HpkV6c2RUUEE", 
        "title": "Matematicas 1 A"
      }, 
      "creationTime": "2019-03-14T15:58:33.583Z", 
      "teacherGroupEmail": "Matematicas_1_A_profesores_e279c5a0@colegio.edu.mx", 
      "calendarId": "colegio.edu.mx_classrooma33e@group.calendar.google.com", 
      "courseState": "ACTIVE", 
      "courseGroupEmail": "Matematicas_1_A_e994b01a@colegio.edu.mx", 
      "ownerId": "11691651297495", 
      "id": "32809901", 
      "descriptionHeading": "Matematicas 1 A"
    }, 
    {
      "updateTime": "2017-10-18T02:42:01.878Z", 
      "guardiansEnabled": false, 
      "name": "Computaci\u00f3n 1\u00b0 2017", 
      "alternateLink": "https://classroom.google.com/c/ODcMVpa", 
      "enrollmentCode": "38hg", 
      "section": "Primaria", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFFwTXcTI4VlFubG9TZZUjFzYUpDeHM", 
        "id": "0B3QTFFwTXGKYfnTk4ZjBBQ2szMGFRUTZZUjFzYUpDeHM", 
        "title": "Computaci\u00f3n 1\u00b0 2017 Primaria"
      }, 
      "creationTime": "2017-10-17T18:05:36.135Z", 
      "teacherGroupEmail": "Computaci_n_1_2017_Primaria_profesores_f0556@colegio.edu.mx", 
      "courseMaterialSets": [
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTU0RmtsWVk&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFEU0RmtsWVk", 
                "id": "0B3QTalZ4dEU0RmtsWVk", 
                "title": "Microsoft Office.pdf"
              }
            }
          ], 
          "title": "01. Reglamento"
        }
      ], 
      "calendarId": "colegio.edu.mx_classroom4281c5@group.calendar.google.com", 
      "courseState": "ARCHIVED", 
      "courseGroupEmail": "Computaci_n_1_2017_Primaria_df9ec@colegio.edu.mx", 
      "ownerId": "11691647495", 
      "id": "83821", 
      "descriptionHeading": "Computaci\u00f3n 1\u00b0 2017 Primaria"
    }, 
    {
      "updateTime": "2017-10-18T02:42:22.711Z", 
      "guardiansEnabled": false, 
      "name": "Computaci\u00f3n 6\u00b0 2017", 
      "alternateLink": "https://classroom.google.com/c/ODYz4OVpa", 
      "enrollmentCode": "nrwh", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3kUXFPTFZwNGVLeHdpUVkwYl8wT", 
        "id": "0B3QTFFwTXGKwYl8wT0p0d2ZBTEJjTWdBNGJXN1NLYk0", 
        "title": "Computaci\u00f3n 6\u00b0 2017"
      }, 
      "creationTime": "2017-10-12T20:22:59.938Z", 
      "teacherGroupEmail": "Computaci_n_6_2017_profesores_2279@colegio.edu.mx", 
      "calendarId": "colegio.edu.mx_classroom9700@group.calendar.google.com", 
      "courseState": "ARCHIVED", 
      "courseGroupEmail": "Computaci_n_6_2017_33ffc261@colegio.edu.mx", 
      "ownerId": "116047495", 
      "id": "86389", 
      "descriptionHeading": "Computaci\u00f3n 6\u00b0 2017"
    }, 
    {
      "updateTime": "2019-07-25T16:55:32.889Z", 
      "guardiansEnabled": false, 
      "name": "Inform\u00e1tica I. 2020", 
      "alternateLink": "https://classroom.google.com/c/NzQ3pa", 
      "enrollmentCode": "t11", 
      "section": "Secundaria", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFFwTXGKYf03ckxJOEFybGZ2TFk", 
        "id": "0B3QTFFwTXbWJVZTB3Zk03ckxJOEFybGZ2TFk", 
        "title": "Informatica I. 2017 Secundaria"
      }, 
      "creationTime": "2017-09-06T19:44:08.819Z", 
      "teacherGroupEmail": "Informatica_I_2017_Secundaria_profesores_6c9@colegio.edu.mx", 
      "calendarId": "colegio.edu.mx_classrooma536@group.calendar.google.com", 
      "courseState": "ACTIVE", 
      "courseGroupEmail": "Informatica_I_2017_Secundaria_86f70814@colegio.edu.mx", 
      "ownerId": "1169495", 
      "id": "74715", 
      "descriptionHeading": "Informatica I. 2017 Secundaria"
    }, 
    {
      "updateTime": "2019-02-18T18:00:24.383Z", 
      "guardiansEnabled": false, 
      "name": "Matem\u00e1ticas. 3\u00b0. 2019", 
      "alternateLink": "https://classroom.google.com/c/N0M1pa", 
      "enrollmentCode": "6aww", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFKYfnlWWlTBEeE05RGd2SWFRSE9vV0J4WlY5SE0", 
        "id": "0B3QTFFwTXGKYfWTBEeE05RGd2SWFRSE9vV0J4WlY5SE0", 
        "title": "MATEM\u00c1TICAS. 3\u00b0. 2017"
      }, 
      "creationTime": "2017-08-17T18:06:19.486Z", 
      "teacherGroupEmail": "MATEM_TICAS_3_2017_profesores_fa1b@colegio.edu.mx", 
      "courseMaterialSets": [
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QNW01a0k&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFFHNW01a0k", 
                "id": "0BHNW01a0k", 
                "title": "TU4 Vocabulary.pdf"
              }
            }
          ], 
          "title": "02 VOCABULARY"
        },
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTF01a0k&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFVHNW01a0k", 
                "id": "0B3QTFFwHNW01a0k", 
                "title": "TU4 Vocabulary.pdf"
              }
            }
          ], 
          "title": "02 VOCABULARY"
        },
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QHNW01a0k&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QT2VHNW01a0k", 
                "id": "0B3QTFFHNW01a0k", 
                "title": "Encapsulation is Great!"
              }
            }
          ], 
          "title": "02 VOCABULARY"
        },
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTNc1FhODg&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QJNc1FhODg", 
                "id": "0B3QTFNc1FhODg", 
                "title": "Homework 1.pdf"
              }
            }
          ], 
          "title": "01. PALITOS1"
        }
      ], 
      "calendarId": "colegio.edu.mx_classrooma1b6f@group.calendar.google.com", 
      "courseState": "ACTIVE", 
      "courseGroupEmail": "MATEM_TICAS_3_2017_3c8471ee@colegio.edu.mx", 
      "ownerId": "11697495", 
      "id": "7071", 
      "descriptionHeading": "MATEM\u00c1TICAS. 3\u00b0. 2017"
    }, 
    {
      "updateTime": "2017-08-17T12:02:40.810Z", 
      "guardiansEnabled": false, 
      "name": "Formaci\u00f3n. 4\u00b0. 2017.", 
      "alternateLink": "https://classroom.google.com/c/NzA1N1pa", 
      "enrollmentCode": "m06", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFFwTVMT2h6WkNxVTk1LVlMMEM2V1d5Y05qbTA", 
        "id": "0B3QTFFwTXGEQUVMT2h6WkNxVTk1LVlMMEM2V1d5Y05qbTA", 
        "title": "Formaci\u00f3n. 4\u00b0. 2017."
      }, 
      "creationTime": "2017-08-17T02:14:58.797Z", 
      "teacherGroupEmail": "Formaci_n_4_2017_profesores_8b5f1b5a@colegio.edu.mx", 
      "calendarId": "colegio.edu.mx_classroomb2ea4@group.calendar.google.com", 
      "courseState": "ARCHIVED", 
      "courseGroupEmail": "Formaci_n_4_2017_e0c9b2c3@colegio.edu.mx", 
      "ownerId": "1169147495", 
      "id": "70577", 
      "descriptionHeading": "Formaci\u00f3n. 4\u00b0. 2017."
    }, 
    {
      "updateTime": "2019-07-25T16:55:08.722Z", 
      "guardiansEnabled": true, 
      "name": "Computaci\u00f3n. 2020", 
      "alternateLink": "https://classroom.google.com/c/MzEyczOVpa", 
      "enrollmentCode": "1m6n", 
      "section": "Curso proped\u00e9utico.", 
      "teacherFolder": {
        "alternateLink": "https://drive.google.com/drive/folders/0B3QTFFwTXGKYfldWeEVWFJNWZnQmpieGFhX3Y0NUw3bzA", 
        "id": "0B3QTFFwTXGKYfldWeDWFJNWZnQmpieGFhX3Y0NUw3bzA", 
        "title": "Computaci\u00f3n. 2017. Curso proped\u00e9utico."
      }, 
      "creationTime": "2016-11-13T20:41:19.520Z", 
      "teacherGroupEmail": "Computaci_n_2017_Curso_proped_utico_profesores_ef28a@colegio.edu.mx", 
      "courseMaterialSets": [
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFOEZoZTQ&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFOEZoZTQ", 
                "id": "0B3QTFFOEZoZTQ", 
                "title": "QUINTO GRADO 2-6-OCT-17 (1).pdf"
              }
            }
          ], 
          "title": "Gu\u00eda de espa\u00f1ol."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFejlnSm8&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QToejlnSm8", 
                "id": "0B3QToejlnSm8", 
                "title": "copia original (1).PDF"
              }
            }
          ], 
          "title": "Lista de verbos en ingl\u00e9s."
        }, 
        {
          "materials": [
            {
              "link": {
                "url": "https://docs.google.com/document/d/1fCWLPgka5fAPAzgCQ2-oOA/pub", 
                "thumbnailUrl": "https://www.google.com/webpagethumbnail?c=73&s=105:70&f=0&d=https://docs.google.com/document/d/1fCWLPgpQka5fAPAzgCQ2-oOA/pub&a=AIYkKU9vqF8BsnkwSOrw", 
                "title": "HiperDoc - EducaNet"
              }
            }
          ], 
          "title": "HiperDoc. Documento con enlaces a recursos did\u00e1cticos."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTXRhcUk&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QeXRhcUk", 
                "id": "0B3QTFPeXRhcUk", 
                "title": "Glosario Te\u00f3rico Pr\u00e1ctico.pdf"
              }
            }
          ], 
          "title": "Diccionario de inform\u00e1tica. Teor\u00eda y Pr\u00e1ctica."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFFSQjA&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFNzNSQjA", 
                "id": "0B3QTFSNzNSQjA", 
                "title": "Horario de Clases.pdf"
              }
            }
          ], 
          "title": "Horario de clases."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFVWaUk&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTmZjVWaUk", 
                "id": "0B3QTFZjVWaUk", 
                "title": "Reglamento del Laboratorio.pdf"
              }
            }
          ], 
          "title": "Reglamento del Laboratorio."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFVI3ZWc&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFsUVI3ZWc", 
                "id": "0B3QTFsUVI3ZWc", 
                "title": "Acerca de tu cuenta y contrase\u00f1a.pdf"
              }
            }
          ], 
          "title": "Acerca de tu cuenta y contrase\u00f1a."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTFFTWhmaHc&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTFUJ1TWhmaHc", 
                "id": "0B3QTQUJ1TWhmaHc", 
                "title": "Programa Anual.pdf"
              }
            }
          ], 
          "title": "Programa Anual."
        }, 
        {
          "materials": [
            {
              "driveFile": {
                "thumbnailUrl": "https://drive.google.com/thumbnail?id=0B3QTY1hOb0E&sz=s200", 
                "alternateLink": "https://drive.google.com/open?id=0B3QTQY1hOb0E", 
                "id": "0B3QTFQY1hOb0E", 
                "title": "Acerca de Google ClassRoom.pdf"
              }
            }
          ], 
          "title": "Acerca de Google Classroom. Importante leer en la primera sesi\u00f3n."
        }
      ], 
      "calendarId": "colegio.edu.mx_classroomca7a5@group.calendar.google.com", 
      "courseState": "ACTIVE", 
      "courseGroupEmail": "Computaci_n_2017_Curso_proped_utico_1c871bdd@colegio.edu.mx", 
      "ownerId": "116947495", 
      "id": "31739", 
      "descriptionHeading": "Recursos y material de apoyo que emplearemos durante el ciclo escolar."
    }
  ]
};
```
```JavaScript
document.getElementById("display1").innerHTML = object1.courses[1].name;

function showAlert(thePlace) { alert("Hi Team... see you in " + thePlace); launchTime = '3 Days';
return launchTime; };

function Turbofan() {
    let speed = 10000; // Private scope apply for this and child blocks!
    this.name = 'Mach3';
    this.zoom = function () {
      // both name and speed are accessible from here
        console.log(`${this.name} zooms with the speed of ${speed} miles per second!`);
    }
}
const myPromise = new Promise((resolve, reject) => {
console.log('Starting asynchronous work!');
	setTimeout( () => { 
			resolve('Cheers from myPromise ', sonic = new Turbofan(), 
			// Custom Object Instance or Extending Object Instance
			sonic.zoom(), console.log(sonic.speed),
			Turbofan.prototype.year = 1988, object1);
			// *object1* a single object that wraps (encapsulate) all
			// the response's collection... JSon Array of Strings.
			reject(new Error ('myPromise was rejected!'));
	}, 3000);
});
// sonic = new Turbofan()... Use custom object instances to gain access for
// change, add or handle that object's properties.
// *Turbofan.prototype.year*  Adding property to the object or extending
// object instance.
// *Turbofan.prototype.year=*  it's equivalent to  *sonic.year=*
// When the custom object instance includes arguments... = new Turbofan(x, y, z),
// becomes an Object Constructor Function.

function apiCall_A(myPromiseResolve) { // *myPromiseResolve* contains all the data
// from *myPromise* resolve method.
console.log('Rendering ApiCall A!');
return new Promise((resolve, reject) => {
		resolve(myPromiseResolve + '& apiCallA & : ');
		reject(new Error ('return Promise in apiCall_A was rejected!'));
} 
); }

myPromise.then(apiCall_A, showAlert('Las Vegas'), console.log('Rendering First THEN!'))
.then(finalRes => console.log(finalRes + '\n' + sonic.name + '\n' + sonic.year + '\n'
+ launchTime + '\n' + object1.courses[6].courseMaterialSets[8].materials[0].driveFile.title))
.catch(Error);
// a Promise must be called without PARENTHESSES! ? ? ?
// finalRes... carries all Variables inside all previous RESOLVES as well as all
// Object's Properties Values through ENCAPSULATION.
```

&nbsp;  

```JavaScript
function getList() {
	return new Promise(resolve => {
		setTimeout(() => resolve(['Joker', 'TinTan', 'Pakal']), 5000);
	});
}
const promise = getList();
promise.then(value => {console.log(value);});
```

&nbsp;


#### A B O U T  &nbsp; &nbsp;  T H E N E A B L E S
```JavaScript
// A simple example on how to take advantage of a Thenable instead of *async* --- *await*
	
	async function getPostCategory() {
		const postId = 123;
		const post = await Post.findById(postId);
		return post.category;
	}
	
// Leveraging a Thenable, the above code block is the same as ...
	
	function getPostCategory() {
		const postId = 123;
		return Post.findById(postId).then(post => {
			return post.category;
		});
	}
```


&nbsp;  

&nbsp;  

&nbsp;  



