// Object constructor function creates showOrder Method as Object, that is
// being assigned to the displayOrderInfo function.

function Order(number, order, payment, ship) {
	this.customerNumber = number;
	this.orderDate = order;
	this.paymentMethod = payment;
	this.shippingDate = ship;
	this.showOrder = displayOrderInfo; }
	// Proper syntax...  this.methodName = functionName;
	// displayOrderInfo definition does NOT include parenthesses.  It's an OBJECT !

// displayOrderInfo function that will be used as an Object METHOD	
function displayOrderInfo() {
	var summaryDiv = document.getElementById("summarySection");
	summaryDiv.innerHTML += ("<p>Customer: " + this.customerNumber + "</p>");
	summaryDiv.innerHTML += ("<p>Order Date: " + this.orderDate.toLocaleString() + "</p>");
	summaryDiv.innerHTML += ("<p>Payment: " + this.paymentMethod + "</p>");
	summaryDiv.innerHTML += ("<p>Ship Date: " + this.shippingDate.toLocaleString() + "</p>"); }

//  Creating Objects using the Order() constructor & attaching arguments:
var shoppingBasket = new Order("KJ2435J", new Date(2017, 6, 17), "visa", new Date(2017, 6, 18));

// The Method showOrder that is defined as object property of Order() and contains
// the arguments of shoppingBasquet, will call the displayOrderInfo function.
	shoppingBasket.showOrder();
