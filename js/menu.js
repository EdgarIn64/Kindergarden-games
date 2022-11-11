primero = true;

function abrir() {
	if(primero) {
		document.getElementById("segundo").hidden = false;
		document.getElementById("primero").hidden = true;		
		primero = false;
	}
	else {
		document.getElementById("primero").hidden = false;
		document.getElementById("segundo").hidden = true;
		primero = true;
	}
}
