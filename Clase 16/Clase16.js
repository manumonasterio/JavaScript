let autos = require(`./AUTOS.json`);
/* console.log(autos); */
const fs= require (`fs`); //
let variable = fs.readFileSync(`./AUTOS.json`, `utf-8`)
let users = JSON.parse(variable) 
console.log(users);
const escribirJson = function (nombreArchivo, datos) {
    fs.writeFileSync(nombreArchivo,datos)
    return nombreArchivo; 
};

const jsonHelper = {
    leerJson: function (nombreArchivo) {
        return JSON.parse(fs.readFileSync(nombreArchivo, `utf-8`))
    },
    escribirJson = function (nombreArchivo, datos) {
        fs.writeFileSync(nombreArchivo,datos)
        return;
    },
}
module.exports =jsonHelper;