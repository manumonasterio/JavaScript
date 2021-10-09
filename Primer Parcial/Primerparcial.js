
function cuadradoDeUnNumero(num){

    if(typeof num == 'number'){
        let cuadrado = num*num
        return cuadrado
    }
    else{ 
        return "No es posible operar con el tipo de dato " + typeof num
    }
}
console.log(cuadradoDeUnNumero(6));

console.log(cuadradoDeUnNumero("6"));



