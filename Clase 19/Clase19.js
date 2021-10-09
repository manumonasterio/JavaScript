let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
  ];

  const tiendaElectronica = {
    productos: electronicos,
    gananciaTotal: function(){
        let suma = this.productos.reduce(function(acum,productos){
            return acum+productos.precioEnUsd*productos.cantVendidos
            }
        ,0)
        return suma
    },
    filtrarPorVendidos: function(cantidadMinima){
        let filtroCantidades = this.productos.filter(
            (productos) =>   productos.cantVendidos >= cantidadMinima
        );
        return filtroCantidades ;
    },
    aumentarPrecio: function(porcentajeAumento) {
    let aumento = this.productos.map(
    )
    }
}
console.log(tiendaElectronica.gananciaTotal());
console.log(tiendaElectronica.filtrarPorVendidos(30));
