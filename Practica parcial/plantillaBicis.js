const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
const jsonHelper = require("./jsonHelper")
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
// A
const bicicletasExternas = jsonHelper.leerJson("bicicletas")
const carrera = {
// B
bicicletasInternas:bicicletasExternas, 
// bicicletas: jsonHelper.leerJson("bicicletas"),
// C
bicicletasPorTanda:4,
// D
ciclistasHabilitados: function (){
    return this.bicicletasInternas.filter( (bici) => !bici.dopaje )
    //return this.bicicletas.filter(function(bici){!bici.dopaje} )
},
// E
listarBicicletas : function (arrayParametro){
 //dopaje? true > inhabilitado
 //dopaje? false > habilitado
arrayParametro.forEach( (bici) => {
    let estado = bici.dopaje ? "inhabilitado" : "habilitado";
    // let estado = if ( bici.dopaje == true) { return "inhabilitado"}else{return "habilitado"}
    console.log(`Ciclista: ${bici.ciclista}, marca: ${bici.marca}, rodado : ${bici.rodado}, peso ${bici.peso} kg,largo ${bici.largo} cm, estado: ${estado} `)
    //${ bici.dopaje ? "inhabilitado" : "habilitado";} )
})},
// F
buscarPorId : ,function(idABuscar){
return this.bicicletasInternas.find((bici) => bici.id === idABuscar  )
}
// G
filtrarPorPeso: function (pesoHabilitador){
// let cicilistasHabilitadosInternos = this.ciclistasHabilitados()
return this.ciclistasHabilitados().filter((bici) => bici.peso <= pesoHabilitador)
},
// H
ordenarPorRodado : function (){
    return this.bicicletasInternas.sort( (a,b)=>b.rodado - a.rodado );
},
// I
largoPromedio: function(){
    let sumatoria = this.bicicletasInternas.reduce ( (acum,bici) => acum + bici.largo,0 )
    let promedio = sumatoria / this.bicicletasInternas.length;
    return `El largo promedio de las bicicletas es de ${promedio.toFixed(2)
    }`},
// J
aumentarPeso:function(pesoAAumentar, idABuscar){
    let bicicletaEncontrada = this.buscarPorId(idABuscar);
    if(bicicletaEncontrada){
        bicicletaEncontrada.peso = bicicletaEncontrada.peso + pesoAAumentar
        //bicicletaEncontrada.peso += pesoAAumentar
        jsonHelper.escribirJson("bicicletas",this.bicicletasInternas)
     }
},
// K
generarTanda : function(rodado,peso){
    let cicilistasHabilitadosInternos = this.ciclistasHabilitados()
    let filtrado = cicilistasHabilitadosInternos.filter((bici) => bici.peso >= peso && bici.rodado<= rodado )
    return filtrado.slice(0,this.bicicletasPorTanda)

},
// L
calcularPodio:function(arrayExterno){
let ordenados = arrayExterno.sort((a,b)=>b.puntaje-a.puntaje)
//return ordenados
let primero = ordenados[0];
let segundo = ordenados[1];
let tercero = ordenados[2];
console.log(`El primer puesto ${primero.ciclista} con un puntaje de ${primero.puntaje}`)
console.log(`El segundo puesto ${segundo.ciclista} con un puntaje de ${segundo.puntaje}`)
console.log(`El tercer puesto ${tercero.ciclista} con un puntaje de ${tercero.puntaje}`)
},


}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
console.table()
console.log(o);

console.log(v, oo + " .E.");
carrera.listarBicicletas(bicicletasExternas)
console.log(o);

//carrera.listarBicicletas(carrera.ciclistasHabilitados()) 
//console.log("soy una barra separadora :D")
//carrera.listarBicicletas(carrera.bicicletas)

console.log(v, oo + " .F.");
console.table(carrera.buscarPorId(1))
console.table(carrera.buscarPorId(25))
console.log(o);

console.log(v, oo + " .G.");
console.table(carrera.filtrarPorPeso(8))
//carrera.listarBicicletas(carrera.filtrarPorPeso(8))
console.log(o);

console.log(v, oo + " .H.");
console.table(carrera.ordenarPorRodado())
console.log(o);

console.log(v, oo + " .I.");
console.log(carrera.largoPromedio())
console.log(o);

console.log(v, oo + " .J. ");
console.table (carrera.buscarPorId(1))
carrera.aumentarPeso(10,1)
console.table (carrera.buscarPorId(1))
console.log(o);

console.log(v, oo + " .K. ");
console.table(carrera.generarTanda(24,5))
console.log(o);

console.log(v, oo + " .L. ");
carrera.calcularPodio(carrera.generarTanda(24,5))
console.log(o);
