noClonar = false;

function tecla(e) {
	if (e.keyCode == 13) {
        	e.preventDefault();
       		evaluar();
	}
 	else {
		document.getElementById("intento").value = String.fromCharCode(e.charCode);
	}
}

function texto(e) {
	if (e.keyCode == 13) {
        	e.preventDefault();
       		evaluar();
	}
	else if(noClonar) {
		noClonar = false;
	}
 	else {
		document.getElementById("intento").value += String.fromCharCode(e.charCode);
	}
}

function antiClonar() {
	noClonar = true;
}

