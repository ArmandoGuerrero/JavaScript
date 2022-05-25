function Item(color, count)	{
	// Handle missing parameters in next two lines...
	if (color == undefined) {this.colorOk = "Black";}
	if (count == undefined) {this.countOk = 0;}
	this.colorOk = color + " No Great!";
	this.countOk = count + 3;
	this.toDOM = function() { ItemsOk.innerHTML = ('<h1>' + 'Quantity: ' + this.countOk + ', &nbsp; Color: <span style="color:blue">' + this.colorOk + '</span>'); return alert ("Hi There"); }
}
// Use the VAR statement to create showObjects instance of the Item object
var showObjects = new Item("Blue", 9);
var a = function () {
	showObjects.toDOM() };   // Calling a Function inside another Function
getItems.onclick = a;        // Calling a Function without Parenthesses Praxis130

/*  T H I S    I S    O K E Y    without    B U T T O N    */
// var showObjects = new Item("Blue", 9);
// showObjects.toDOM();