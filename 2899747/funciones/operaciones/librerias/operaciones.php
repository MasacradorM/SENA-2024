<?php
/**
 * Operaciones emtre dos numeros
 * Autor: Oscar Mejia
 * Fecha: 07/05/2024
 */

function suma($pnum1,$pnum2){
    $numero1 = $pnum1;
    $numero2 = $pnum2;
    $suma = $numero1 + $numero2;
    return $suma;
}
function resta($pnum1,$pnum2){
    $numero1 = $pnum1;
    $numero2 = $pnum2;
    $resta = $numero1 - $numero2;
    return $resta;
}

function mult($pnum1,$pnum2){
    $numero1 = $pnum1;
    $numero2 = $pnum2;
    $mult = $numero1 * $numero2;
    return $mult;
}

function division($pnum1,$pnum2){
    $numero1 = $pnum1;
    $numero2 = $pnum2;
    $division = $numero1 / $numero2;
    return $division;
}

?>