abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
contador = 0;
stopSubmit = false;

function evaluar() {
	if (!stopSubmit) {
		stopSubmit= true;
		letra = abc[contador];

		if (document.getElementById("intento").value.toUpperCase() == letra) {
			setTimeout(() => {
				siguiente();
			}, 1000);
			contador++;
			(contador < abc.length)? bien() : final(); 
			document.getElementById("intento").disabled = true;
			document.getElementById("indicacion").hidden = true;
		} else 
			mal();
	}
}

function bien() {
	document.getElementById("bien").hidden = false;
	document.getElementById("mal").hidden = true;
	document.getElementById("boton").hidden = true;
}

function mal() {
	setTimeout(() => {
		document.getElementById("mal").hidden = true;
	}, 850);
	document.getElementById("mal").hidden = false;
	stopSubmit = false;
}

function siguiente() {
	document.getElementById("boton").hidden = false;
	document.getElementById("bien").hidden = true;
	document.getElementById("letra").innerHTML = abc[contador] + " <input type='text' id='intento' onkeypress='pulsar(event)' maxlength=1>";
	document.getElementById("indicacion").hidden = false;
	document.getElementById("intento").disabled = false;

	stopSubmit = false;
}

function final() {
	bien();
	setTimeout(() => {
		document.getElementById("bien").hidden = true;
		document.getElementById("juego").hidden = true;
		document.getElementById("indicacion").hidden = true;
		document.getElementById("final").hidden = false;
	}, 1000);
}
