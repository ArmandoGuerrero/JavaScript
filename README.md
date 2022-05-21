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
return "Game name: " + game.name + " , Drone Model: " + drone.model + ", Drone Brand: " +
drone.brand + ", Engines: " + drone.engines + ", Color: " + drone.color + ",
and Players in Baseball: " + game.players; }

console.log(exploitDetails({model: "Pulsar Q55", brand: "AFlight", engines: 4, color: "Blue"}, {name: "Baseball", team: "Caneks", players: 9}));
```
Although the above snippet works okay it is better to encapsulate the data (and methods) through the required variables. Use each *var* as a single object to wrap all the collection.
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




