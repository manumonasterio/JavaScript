function test1(x,y){
    return x - y
}
console.log(test1(10,20))

function test2 (x,y){
    return x*2-y
}
console.log(test2(10,20));

function conversor(pulgadas){
    return pulgadas*2.54
} //1 pulgada =2.54 cm
let pulgadas = 10
console.log(`${pulgadas} pulgadas son ` + conversor(pulgadas) + " centimetros");

function enlace(nombre){
    return "http://www."+ nombre +".com"
}
let nombre = "pepito"
console.log(enlace(nombre));

function anioperri(edad){
    return edad*7
}
let edad=5
console.log(`si el humano tiene ${edad} años, el perri tiene `  + anioperri(edad));

function sueldoPorHora (mensual){
    return "$" + mensual/40
}

let mensual= 20000

console.log("gano " + sueldoPorHora(mensual) + " por hora");

function calculadorIMC (peso,altura){
    return peso/altura^2
}

var peso = 100 
var altura= 1.83
console.log(`si yo peso ${peso} kg y mido ${altura} m entonces mi IMC es ` + calculadorIMC(peso,altura) );

var peso = 60
var altura= 1.62
console.log(`si yo peso ${peso} kg y mido ${altura} m entonces mi IMC es ` + calculadorIMC(peso,altura) );


