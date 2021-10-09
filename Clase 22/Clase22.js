const fs = require('fs')
let autosJson = fs.readFileSync(__dirname + '/autos.json', 'utf-8')
let autos = JSON.parse(autosJson)

let carrera = {
    autos : autos ,
    autosPorTanda : 6 ,
    autosHabilitados  : function (){
        return this.autos.filter (autos => !autos.sancionado);
    },
    prueba: function(){
        autos.forEach(function(auto) {
            console.log(auto.aceleracion);         
        });
    }

}
console.log(carrera.prueba());