

function makechar() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~';:[{\|/?.>,<}];";

	text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}

function checkmultiplo(num) {
	return (num % 9 === 0);
}

var symbol9 = makechar();

// construir matriz
function makemtr(n, symbol9) {

	var matriz = new Array(n);
	var cont = (n * n) - 1;
	for (i = 0; i < n; i++) {
		matriz[i] = new Array(n);
		for (j = 0; j<n; j++) {
			if (checkmultiplo(cont)) {
				matriz[i][j] = cont + '&nbsp;' + symbol9.fontcolor("red") + '&nbsp;';
			} else {
				var symbol = makechar();
				matriz[i][j] = cont + '&nbsp;' + symbol.fontcolor("red") + '&nbsp;';
			}
			
			cont--;
		}
	}
	return matriz;	
}

//imprimir
function imprimir(matr, n) {
	for (i = 0; i < n; i++) {
		var str = '&nbsp;' + matr[i].toString();
		document.write(str);
		document.write('<br>');
		document.write('<br>');
		console.log(str);
	}
}

function myFunction() {
	   document.getElementById("demo").innerHTML = symbol9;
}

function change() {
	document.getElementById("par1").innerHTML = "Piensa un n&uacute;mero de dos cifras, e.j.: 56";
	document.getElementById("par2").innerHTML = "Resta de forma consecutiva sus d&iacute;gitos, en nuestro ejemplo (56 - 5 - 6), resultando 45";
	document.getElementById("par3").innerHTML = "Busca el s&iacute;mbolo correspondiente al resultado en la tabla de abajo" 
	document.getElementById("demo").innerHTML = "Click para leer la mente"
	document.getElementById("title").innerHTML = "El lector de mentes"
	document.getElementById("restart").innerHTML = "Volver"
}

function restart() {
	imprimir().restart();
}