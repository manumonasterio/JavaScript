let casa= 'asdohn'
let cas= casa.charAt(2)
console.log(cas);

console.log("cajas");

let ejemplo ="hola, soy una función expresada"
function saludo(){

    return ejemplo
}
console.log(saludo());


function saludar() {
    var nombre ="Lucas"
    var apellido = "Monasterio"
     return 'Hola, ' + nombre + ' ' + apellido + '!';
 }
 console.log(saludar());

 function anterior(numero){
    return numero - 1
}

function triple (numero){
    return numero*3
}

function anteriorDelTriple(numero){
    return anterior(triple(numero))
}
console.log(anteriorDelTriple(2));

let number =
console.log("Gato" || "Perro" );


let dia = 'jueves';
switch  (dia) {	
	case  'viernes':
    	console.log('buen finde');
	break;
	case  'lunes':
    	console.log('buena semana');
	break;
	default:
    	console.log('buen dia');
}

function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
			console.log("tenés clases");
		break;
		case  'miercoles':
			console.log("tenés clases");
		break;
		case  'viernes':
			console.log("tenés clases");
		break;
		default:
			console.log(" no tenés clases");
	}
}
console.log(tengoClases('jueves'));