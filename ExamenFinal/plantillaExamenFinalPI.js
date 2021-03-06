const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Lucas Monasterio";
const tema = "Tema 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper")
const peliculasExternas = jsonHelper.leerJson("peliculas")
// A
const gestionDePeliculas = {
// B
peliculas: peliculasExternas ,
// C
listarPeliculas: function(arrayPeliculas){
    arrayPeliculas.forEach((peli)=> {
        console.log(`${peli.titulo}, de ${peli.director}.  Duración: ${peli.duracion} minutos, ${peli.genero}, (${peli.calificacionIMDB} / 10 en IMDB)`);
    }
    );
},
// D
buscarPorId: function(idABuscar){
    return this.peliculas.find((peli) => peli.id === idABuscar  )
},
// E
peliculasPorGenero: function(generoBuscado){
    let peliPorGenero = this.peliculas.filter((peli)=> peli.genero === generoBuscado)
    return peliPorGenero
},
// F
filtrarPorCalificacion: function (Calmin,Calmax){
    let peliPorClasificacion = this.peliculas.filter((peli)=> peli.calificacionIMDB > Calmin && peli.calificacionIMDB<Calmax)
    return peliPorClasificacion
},
// G
ordenarPorDuracion :function(){
    return this.peliculas.sort( (a,b)=>b.duracion - a.duracion );
},
// H
duracionPromedio :function(){
    let sumatoria = this.peliculas.reduce ( (acum,peli) => acum + peli.duracion,0 );
    let promedio= sumatoria/this.peliculas.length;
    return `El promedio de duración de las películas es de: ${promedio} minutos`
},
// I
modificarGeneroPorId: function(nuevoGenero,idABuscar){
    let pelicula = this.buscarPorId(idABuscar);
    if(pelicula){
        pelicula.genero = nuevoGenero
        jsonHelper.escribirJson("peliculas",this.peliculas)
    }
}
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(peliculasExternas)
console.log(o);
console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorId(1)) 
console.log(gestionDePeliculas.buscarPorId(15)) 
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero("Drama"));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(2,7))
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion())
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio()); 
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.modificarGeneroPorId("Drama",4)
gestionDePeliculas.listarPeliculas(peliculasExternas)
console.log(o);
