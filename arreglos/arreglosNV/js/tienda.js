/**
 * Tienda
 * Autor: Oscar Mejia
 * Fecha: 30/04/2024
 */
let tienda = [];
let i;
let numeroRegistros;
let nuevoProducto;
let listar = [];

tienda = [
    {producto:'Arroz', tipoProducto:'grano', tipoUnidad:'gramos', cantidad:'1000', precio:'2400'},
    {producto:'Papa', tipoProducto:'fruver', tipoUnidad:'gramos', cantidad:'500', precio:'1000'},
    {producto:'Mora', tipoProducto:'fruver', tipoUnidad:'gramos', cantidad:'500', precio:'1500'},
    {producto:'Trucha', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:'1000', precio:'9000'},
    {producto:'Pollo Entero', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:'500', precio:'4500'}
];
nuevoProducto= {producto:'Res', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:'1000', precio:'7500'};

tienda.push(nuevoProducto);

numeroRegistros = tienda.length;

for(i=0;i < numeroRegistros ; i++){
    tienda.push(tienda[i]);
}
console.log(tienda);
//listar
console.log("buscar \n");
for(i=0 ; i < numeroRegistros ; i++){
    if(tienda[i].tipoProducto=="carnes"){
        listar.push(tienda[i]);
    }
    else{
        console.log("");
    }
}

console.log(listar);