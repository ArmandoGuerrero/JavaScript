const Stock = { Greeting: "Hi" , precio: 99.99, country: "México" };

function sayHello(mensaje){ 
		var newGreeting = Stock.Greeting + " Team ";
		
			saludo.innerHTML = ('<h1>' + newGreeting + Stock.country + ' &nbsp; &mdash;  estamos al &nbsp;<span style="color:blue">' + Stock.precio + '%</span>');
			
		alert ("Hola " + mensaje); }

sayHello(Stock.country);

function getDistance(speed, time) {
var distance = speed * time;
return distance;  }
// this -return- distance it's the value passed to showDistance
showDistance.innerHTML = getDistance(2, 33);

