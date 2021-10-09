const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales")

// Utilizar un método de array que retorne los primeros 5 profesionales

const primerosCincoProfesionales= arrayProfesionales.slice(0,5)

console.log(primerosCincoProfesionales); 

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}
// reemplazar  id 14 por un nuevoProfesional

let reemplazo = arrayProfesionales.splice(14,1,nuevoProfesional)

console.log(arrayProfesionales);

// ordenar el array de acuerdo al honorario de la Consulta

let ordenar = arrayProfesionales.sort((a,b)=> a.honorarioConsulta - b.honorarioConsulta)

console.log(arrayProfesionales);

// filtrar

let filtro = arrayProfesionales.filter(
    (a) => a.identificador = 15
)

console.log(filtro);
