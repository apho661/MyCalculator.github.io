function clearScreen() {
	document.getElementById("result").value = "";
}

function display(value) {
	document.getElementById("result").value += value; 
}

function calculate() {
	var a = document.getElementById("result").value;
	var q = eval(a);	//eval evaluates a string expression
	document.getElementById("result").value = q;
}
