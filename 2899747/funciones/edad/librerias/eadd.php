<?php
/**
 * Edad
 * Autor: Oscar Mejia
 * Fecha: 05/12/2024
 */

function edad($edad){
    $edad = $edad;
    $resultado= "";
    if($edad>=18){
        $resultado = "La persona es mayor de edad";
    }
    else{
        $resultado = "La persona es menor de edad";
    }
    return $resultado;
}
?>