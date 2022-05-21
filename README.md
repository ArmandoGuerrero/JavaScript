# JavaScript
### Examples collection to learn JavaScript.  

- [JavaScript Variables](#javascript-variables)
- [JavaScript Functions](#javascript-functions.)
- [JavaScript Objects & Methods](#javascript-object-&-methods)
- [JavaScript CallBacks](#javascript-callbacks)
- [JavaScript Arrow Functions](#javascript-arrow-functions)
- [JavaScript Promises](#javascript-promises)



## JavaScript Variables.

## JavaScript Functions.

## JavaScript Object & Methods.

## JavaScript CallBacks.

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

## JavaScript Promises.



