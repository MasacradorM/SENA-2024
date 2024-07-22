/**
 * arreglos
 * Autor : Oscar Muñoz
 * Fecha: 23/04/2024
 */

function arreglos(){
    let contar = [];
    let pares = [];
    let impares = [];

    for(contar=1;contar<=10;contar++){
        if(contar%2==0){
            pares += [contar] + ", ";
        }
        else{
            impares += [contar] + ", ";
        }

    }

    return `Numeros pares : ${pares}\n Numeros impares : ${impares}`;
}