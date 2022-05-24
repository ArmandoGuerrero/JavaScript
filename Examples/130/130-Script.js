//document.getElementById("getReturn").onclick = usingReturn;
getReturn.onclick = usingReturn;  

// ABOUT CALL A FUNCTION WITHOUT PARENTHESSES
/* 
ABOUT THE usingReturn FUNCTION CALL WITHOUT PARENTHESSES :
That´s because we don't want to call the execution of the function at that runtime moment, we just want to assign a reference to it as a getReturn.onclick property, so that it can be called and executed later, just in time when the onclick event happens.
This would be incorrect: getReturn.onclick = usingReturn();
It would call the function immediately and assign the return value to onclick object, which is undefined; even without touch the getReturn button, then nothing would happen when a true button clic event takes place.

ANOTHER WAY OF A FUNCTION CALL WITHOUT PARENTHESSES CAN BE DONE WHEN DEFINED AS A VAR (object method):
var a = function () { alert("Hi Team"); };  ////// As done in Praxis134
document.getElementById('MyButton').onclick = a;

So we can declare the function as above method. Assign the function to a variable and calling it from anywhere!

WHENEVER WE CALL ANY FUNCTION WITHOUT PARENTHESSES WE WILL GET THE FOLLOWING:
*Given the next...*
function test(){ return 123; };

*Calling such function without parenthesses...*
test;
*Result via console: *
function test() { return 123; }

*Calling such function with parenthesses...*
test();
*Result via console: *
123

*/

alert("Hello World");

function Average(a, b, c) {
var sum_of_numbers = a + b + c;
var result = sum_of_numbers / 3;
return result; }

function usingReturn() {
var input_i = document.getElementById('Val-Promedio-1').value;
var input_j = document.getElementById('Val-Promedio-2').value;
var input_k = document.getElementById('Val-Promedio-3').value;
// Catch & convert to integer in one step . . .
// var input_i = parseInt(document.getElementById('Val-Promedio-1').value);


// Checking Falsy & Truthy Values.
(input_i && input_j && input_k) ? alert("Thank you!") : alert("Please fill in all fields");


var i = parseInt(input_i);
var j = parseInt(input_j);
var k = parseInt(input_k);
var returnValue = Average(i, j, k);
// returnValue = Average(i, j, k);  BAD PROG TECH without the keyword VAR

// Display the Promedio to the user.
document.getElementById('Promedio').innerHTML = returnValue;
/* returnValue it´s the "return result" output from Average */

// Another way of displaying
document.getElementById('Promedio').textContent = '<h1>' + returnValue + '</h1>'
}

