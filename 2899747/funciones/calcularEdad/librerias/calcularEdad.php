<?php
/**
 * Caulcular Edad
 * Autor: Oscar Mejia
 * Fecha: 12/05/2014
 */

 function CalcularEdad($anioNac){
    $anioNac = $anioNac;
    $anioActual = 2024;
    $edad = $anioActual -  $anioNac;
    $resultado = "";
    if($edad>=18){
        $resultado = "La persona es mayor de edad";
    }
    else{
        $resultado = "La persona es menor de edad";
    }
    return $resultado;
}
?>