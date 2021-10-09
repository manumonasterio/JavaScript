let convertidorACenti = pulgadas => 2.54*pulgadas ;
console.log(convertidorACenti(2));

//convertidor a pulgadas

let convertirURL = unString => "http://www."+ unString +".com";
console.log(convertirURL("pepito"));

//convertidor a Url

let conAdmiracion= unString => "¡"+unString+"!";
console.log(conAdmiracion("Hola mundo"));

//texto con admiracion

let edadPerruna = edadHumana => edadHumana*7;
console.log(edadPerruna(3))

//edad humana en años perro

let valorHoraTrabajo= sueldo=> sueldo/40;
console.log(valorHoraTrabajo(80000))

// sueldo por hora

let calculadorIMC = (altura, peso)=> peso/Math.pow(altura,2);
let alt = Math.random()+1;
let p = Math.random()*100+20;
console.log("altura:"+alt + " peso:"+ p);
console.log(calculadorIMC(alt, p))

// indice de masa corporal

let convertirMayuscula = unString => unString.toUpperCase();
console.log(convertirMayuscula("pepito"));

//convertidor a Mayusculas

let tipoDato = unDato => typeof(unDato);
console.log(tipoDato("pepito"));
console.log(tipoDato(30));
console.log(tipoDato(false));

//tira el tipo de dato

let calcularPerimetro = radio => 2*radio*Math.PI;
console.log(calcularPerimetro(4))

const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

let buscarNombre = nombre => {
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i]===nombre){
            return "nombre encontrado"
        }
                
    }

}

    buscarNombre('Martin');