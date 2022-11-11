contador = 0;
palabras = ["GATO", "RATON", "PERRO", "AVION", "CASA", "BURRO", "VACA", "ZAPATO", "ESCUELA", "SERPIENTE"];

function evaluar() {
	inicial = palabras[contador].charAt(0);
	intento = document.getElementById("intento").value.toUpperCase();
	if(intento == inicial)
		bien();
  	else
		mal();
}


function bien() {
	setTimeout(() => {
		document.getElementById("bien").hidden = true;
		document.getElementById("juego").hidden = false;
		document.getElementById("intento").value = "";
		(contador < palabras.length)? siguiente() : fin();
	}, 950);
	document.getElementById("bien").hidden = false;
	document.getElementById("juego").hidden = true;
	contador++;
}

function mal() {
	setTimeout(() => {
		document.getElementById("mal").hidden = true;
	}, 950);
	document.getElementById("mal").hidden = false;
}

function siguiente() {
	nx = palabras[contador].toLowerCase();
	document.getElementById("figura").setAttribute("src", "imagenes/figuras/"+nx+".png");
	document.getElementById("palabra").innerHTML = palabras[contador]; 
}

function fin() { 
	setTimeout(() => {
		document.getElementById("bien").hidden = true;
		document.getElementById("indicacion").hidden = true;
		document.getElementById("fin").hidden = false;
	}, 950);
	document.getElementById("bien").hidden = false;
	document.getElementById("juego").hidden = true;
}