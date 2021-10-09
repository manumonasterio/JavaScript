const archivos = require("./lecturaEscritura");
let arrayDepartamentos = archivos.leerJson("departamentos");

let inmobiliaria= {
departamentos : arrayDepartamentos ,
listarDepartamentos: function(deptos){
    deptos.forEach(function(unDepto){
        let disponibilidad = unDepto.disponible == true ? "Disponible" : "Alquilado"
        console.log(`id: ${unDepto.id}, precio ${unDepto.precioAlquiler}, esta ${disponibilidad}, ${unDepto.ambientes} ambientes`)
    })
}};


console.log(inmobiliaria.listarDepartamentos());
