/**
 * arreglos
 * Autor : Oscar Muñoz
 * Fecha: 23/04/2024
 */

function tablas(ptabla){
    let tablas = ptabla;
    let fila ;
    let n = 0;
    let i;
    let tabla = [];
    let j;

    for(i = 0 ; i <= 4 ; i++){
            fila = [];
	    j;
            for(j = 0 ; j <= 4 ; j++){
                n = n + 1;
                fila[j]= n * tablas;
            }
	tabla[i]=fila;
	tabla.push(tabla[i,j]);
    }

 
    return tabla;
}