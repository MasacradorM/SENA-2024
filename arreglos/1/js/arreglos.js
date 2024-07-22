/**
 * arreglos
 * Autor : Oscar Muñoz
 * Fecha: 23/04/2024
 */

function arreglos(){
    let arreglos = [];
    let resultado = "";
    arreglos = [1,2,3,4,5];

    let numero1 = arreglos[0];
    let numero2 = arreglos[1];
    let numero3 = arreglos[3];
    let cantidadDatos = arreglos.length;
    let i;

    for(i=0;i<cantidadDatos;i++){
        resultado += `${arreglos[i]}\n`;
    }

    return resultado;
}