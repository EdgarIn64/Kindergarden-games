var animales = ["raton", "gato", "oveja", "oso", "elefante", "abeja", "burro", 
			"serpiente", "vaca", "perro"];
var path = "imagenes/figuras/";
var intento = "";
var nombre = "_ _ _ _ _";
var contador = 0;
var animal = animales[0].toUpperCase();
var faltan = animal.length;

function intentar(e) {
	let keynum = e.keyCode;
	let letra = String.fromCharCode(keynum).toUpperCase();
	if(animal.includes(letra) && !intento.includes(letra)) {
		intento += letra;
		setNombre(letra);
	}
}

function setNombre(letra) {
	var indices = [];
	var posicion = 0;

	for(i=0; i<animal.length-1; i++) {
		posicion = animal.indexOf(letra, i);
		if (posicion >= 0) {
			indices.push(posicion*2);
			i = posicion;
		} 
	}

	for(i=0; i<indices.length; i++) {
		nombre = nombre.replaceAt(indices[i], letra);
		faltan--;
	}

	document.getElementById("animalNombre").innerHTML = nombre;

	if(faltan == 0)
		avanzar();
}

function avanzar() {
	(contador < animales.length-1) ? siguiente() : terminar();
}

function siguiente() {
	contador++;
	intento = "";
	animal = animales[contador].toUpperCase();
	faltan = animal.length;
	nombre = "_";
	for(i=0; i<animal.length-1; i++) {
		nombre += " _"; 
	}
	document.getElementById("indicacion").innerHTML = animal;
	document.getElementById("animal").src = path+animal.toLowerCase()+".png";
	document.getElementById("animalNombre").innerHTML = nombre;
}

function terminar() {
	indicacion.hidden = true;
	juego.hidden = true;
	fin.hidden = false;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}