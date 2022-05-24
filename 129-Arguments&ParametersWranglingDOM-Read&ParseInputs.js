<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Sum & Volume Functions</title>
<script>

/* Step 1 Read &
// Step 2 Convert (Parse) what the user typed from text into a number.
// Step 1   var textHeight = document.getElementById('HeightInputBox').value;
// Step 2   var H = parseInt(textHeight);      */


// One step to Read and Convert what the user typed from text into a number.
function sumInputs() {
	// Read and Convert (Parse) what the user typed from text into a number.
	var sumInput1 = parseInt(document.getElementById('SumInputBox-1').value);
	var sumInput2 = parseInt(document.getElementById('SumInputBox-2').value);
	var sumInput3 = parseInt(document.getElementById('SumInputBox-3').value);
	calculateSum(sumInput1, sumInput2, sumInput3); }
	
function calculateSum(valueSum1, valueSum2, valueSum3) {
	var sum = valueSum1 + valueSum2 + valueSum3;
	var location = document.getElementById("Suma");
	updateResult(sum, location); }
	
function volumeInputs() {
	// Read and Convert (Parse) what the user typed from text into a number.
	var volInput1 = parseInt(document.getElementById('VolInputBox-1').value);
	var volInput2 = parseInt(document.getElementById('VolInputBox-2').value);
	var volInput3 = parseInt(document.getElementById('VolInputBox-3').value);
	calculateVol(volInput1, volInput2, volInput3); }

function calculateVol(valueVol1, valueVol2, valueVol3) {
	var vol = valueVol1 * valueVol2 * valueVol3;
	var location = document.getElementById("Volumen");
	updateResult(vol, location); }

function updateResult(result, elementId) {
	elementId.innerHTML = result;	}
</script></head>

<body>
Valor de Sumando 1: <input type="text" id="SumInputBox-1"><br />
Valor de Sumando 2: <input type="text" id="SumInputBox-2"><br />
Valor de Sumando 3: <input type="text" id="SumInputBox-3"><br />
<button type="button" onclick="sumInputs()">Calcular Suma</button><br />
La Suma calculada es: <div id="Suma"></div>
<br /><br /><br />
Valor de Volumen 1: <input type="text" id="VolInputBox-1"><br />
Valor de Volumen 2: <input type="text" id="VolInputBox-2"><br />
Valor de Volumen 3: <input type="text" id="VolInputBox-3"><br />
<button type="button" onclick="volumeInputs()">Calcular Volumen</button><br />
El Volumen calculado es: <div id="Volumen"></div>
</body>
</html>
