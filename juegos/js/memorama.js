var feliz = true;
var puntos = 0;
var valorIntento1 = 0;
var carta1;
var mica1;
var valorIntento2 = 0;
var intentos = 0;

var path = "imagenes/cartas/";
var cartas = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", 
	      "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

function asignar() {
	var aux = 0;
	var carta = "";
	for (i=0; i<cartas.length; i++) {
		procesoAsignar(i);
	}
	for (i=0; i<cartas.length; i++) {
		procesoAsignar(i);
	}

}

function procesoAsignar(i) {
	var aux = Math.floor(Math.random() * (20) + 1);
	var carta = document.getElementById("carta"+aux);
	if(carta.src=="") {
		carta.src = path+cartas[i];
		carta.value = i;
	}
	else
		procesoAsignar(i);
}

function reiniciar() {
	valorIntento1 = 0;
	valorIntento2 = 0;
	intentos = 0;
}

function puntaje() {
intentos = 0;
	puntos += 1;
	if(puntos >= 10) {
		setTimeout(() => {
			document.getElementById("memorama").hidden = true;
			document.getElementById("siguiente").hidden = false;
		}, 1200);
	}
	else 
		reiniciar();
}

function descubrir(x) {
	if(intentos<2) {
	var mica = document.getElementById("mica"+x);
	var carta = document.getElementById("carta"+x);
	carta.hidden = false;
	mica.hidden = true;
 	intentos += 1;

	if (intentos == 1) {
		valorIntento1 = carta.value;
		carta1 = carta;
		mica1 = mica;
	}
	else { 
		permiso = false;
		valorIntento2 = carta.value;
		if (valorIntento1 == valorIntento2)
			puntaje();
		else {
			setTimeout(() => {
				carta.hidden = true;
				carta1.hidden = true;
				mica.hidden = false;
				mica1.hidden = false;
				
				reiniciar();
			}, 500);
		}
	}
	}
}

function cambiarImg() {
	if (feliz) { 
		document.getElementById("img_fin").src="imagenes/evaluacion/enojado.png";
		feliz = false;
	}
	else {
		document.getElementById("img_fin").src="imagenes/evaluacion/feliz.png"; 
		feliz = true;
	}
}



