function uno() {
	if(document.getElementById("r1").value == 8) {
		setTimeout(() => {
			document.getElementById("uno").hidden = true;
			document.getElementById("dos").hidden = false;
			document.getElementById("bien").hidden = true;
		}, 1000);
		document.getElementById("bien").hidden = false;		
	}
	else {
		setTimeout(() => {
			document.getElementById("mal").hidden = true;
			document.getElementById("uno").hidden = false;
		}, 800);
			document.getElementById("uno").hidden = true;
			document.getElementById("mal").hidden = false;
	}
}

function dos() {
	if(document.getElementById("r2").value == 10) {
		setTimeout(() => {
			document.getElementById("dos").hidden = true;
			document.getElementById("tres").hidden = false;
			document.getElementById("bien").hidden = true;
		}, 1000);
		document.getElementById("bien").hidden = false;		
	}
	else {
		setTimeout(() => {
			document.getElementById("mal").hidden = true;
			document.getElementById("dos").hidden = false;
		}, 800);
			document.getElementById("dos").hidden = true;
			document.getElementById("mal").hidden = false;
	}
}

function tres() {
	if(document.getElementById("r3").value == 9) {
		setTimeout(() => {
			document.getElementById("tres").hidden = true;
			document.getElementById("cuatro").hidden = false;
			document.getElementById("bien").hidden = true;
		}, 1000);
		document.getElementById("bien").hidden = false;		
	}
	else {
		setTimeout(() => {
			document.getElementById("mal").hidden = true;
			document.getElementById("tres").hidden = false;
		}, 800);
			document.getElementById("tres").hidden = true;
			document.getElementById("mal").hidden = false;
	}
}

function cuatro() {
	if(document.getElementById("r4").value == 11) {
		setTimeout(() => {
			document.getElementById("cuatro").hidden = true;
			document.getElementById("cinco").hidden = false;
			document.getElementById("bien").hidden = true;
		}, 1000);
		document.getElementById("bien").hidden = false;		
	}
	else {
		setTimeout(() => {
			document.getElementById("mal").hidden = true;
			document.getElementById("cuatro").hidden = false;
		}, 800);
			document.getElementById("cuatro").hidden = true;
			document.getElementById("mal").hidden = false;
	}
}

function cinco() {
	if(document.getElementById("r5").value == 8) {
		setTimeout(() => {
			document.getElementById("cinco").hidden = true;
			document.getElementById("fin").hidden = false;
			document.getElementById("bien").hidden = true;
		}, 1000);
		document.getElementById("bien").hidden = false;		
	}
	else {
		setTimeout(() => {
			document.getElementById("mal").hidden = true;
			document.getElementById("cinco").hidden = false;
		}, 800);
			document.getElementById("cinco").hidden = true;
			document.getElementById("mal").hidden = false;
	}
}