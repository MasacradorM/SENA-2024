<?php
/**
 * Tres edades 
 * Autor: Oscar Mejia
 * Fecha: 05/12/2024
 */

 function edad($anioNac){
    $anioNac = $anioNac;
    $anioActual = 2024;
    $edad = $anioActual - $anioNac;
    if($edad>=18){
        $edad = $edad . " Es mayor de edad";
    }
    else{
        $edad = $edad . " Es menor de edad";
    }
    return $edad;
 }

 function definir($edad1, $edad2, $edad3){
    $edad1 = $edad1;
    $edad2 = $edad2;
    $edad3 = $edad3;
    $promedio = ($edad1 + $edad2 + $edad3)/3;
    $resultado = "";

    if($promedio>=18){
        $resultado = "En promedio las personas son mayores de edad";
    }
    else{
        $resultado = "En promedio las personas son mayores de edad";
    }
    return $resultado;

 }
?>