partes = ["monitor", "teclado", "mouse", "cpu", "fin"];
path = "imagenes/figuras/"
contador = 0;

function evaluar() {
	parte = partes[contador];
	if (document.getElementById("intento").value.toLowerCase() == parte) {
		contador++;
		document.getElementById("intento").value = "";
	        (partes[contador] != "fin")? siguiente() : fin();
	}
	else
		mal();
}

function mal() {
	setTimeout(function() {
		document.getElementById("mal").hidden = true;
	}, 500);
	document.getElementById("mal").hidden = false;
}

function siguiente() {
	setTimeout(function() {
		document.getElementById("bien").hidden = true;
		document.getElementById("juego").hidden = false;
		document.getElementById("parte").src = path+partes[contador]+".png";
		document.getElementById("mensaje").innerHTML = partes[contador].toUpperCase();
	}, 700);
	document.getElementById("juego").hidden = true;
	document.getElementById("bien").hidden = false;
}

function fin() {
	setTimeout(function() {
		document.getElementById("bien").hidden = true;
		document.getElementById("fin").hidden = false;
	}, 500);
	document.getElementById("juego").hidden = true;
	document.getElementById("bien").hidden = false;
}
