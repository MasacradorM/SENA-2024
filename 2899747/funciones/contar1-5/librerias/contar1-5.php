<?php
/**
 * Contar del 1 al 5
 * Autor: Oscar Mejia
 * Fecha: 12/05/2024
 */

 function whileC(){
    $contar = 0;
    $numero = 5;
    $resultado= "";

    while($contar<$numero){
        $resultado += $contar++;

    }
    return $resultado;
 }
 function forC(){
    $contar= "";
    $numero = 5;
    $resultado= "";

    for($contar=0;$contar<=$numero;$contar++){
        $resultado += $contar;
    }
    return $resultado;
 }
?>