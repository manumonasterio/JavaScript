    let edad=21
    
    if(edad<0){
        console.log("Error");
    }    else if(edad<18){
    console.log("No puede pasar al bar.")
    }
    else if(edad<21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    }
    else{
    console.log("Puede pasar al bar y tomar alcohol.")
    }

    if(edad%2!=0){
        console.log("Sabias que tu edad es impar?");
    }
    if(edad==21){
        console.log("Felicidades por la mayoria de edad");
    }

   /* Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
    litrosConsumidos.
    A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
    cuenta las siguientes consideraciones.
    ● Si el vehículo es “coche”, el precio por litro es de $86,
    ● Si es “moto” ha de ser $70.
    ● Si es “autobús” ha de ser $55.
    ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
    ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar. */

    function totalAPagar(vehiculo,litrosConsumidos){
        let precio;
        let adicional;
    

        if (vehiculo==='coche') {
            precio = 86;
        }
        else if (vehiculo==='moto') {
            precio = 70;
        }
        else {
            precio = 55;
        }

        if (0<litrosConsumidos<25) {
            adicional = 50;
        } else {
            adicional = 25;
        }

        let total = (litrosConsumidos * precio) + adicional;
        return total;
    }



    console.log(totalAPagar('moto', 40));

 