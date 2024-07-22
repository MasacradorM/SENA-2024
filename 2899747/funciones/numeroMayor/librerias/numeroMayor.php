<?php
/**
 * Numero mayor
 * Autor: Oscar Mejia
 * Fecha: 05/12/2024
 */

 function numeroMayor($num1,$num2){
    $num1 = $num1;
    $num2 = $num2;
    $resultado = "";
    if($num1==$num2){
        $resultado = "Los numeros son iguales";
    }
    else if($num1>$num2){
        $resultado = "El numero ". $num1 . " es mayor";
    }
    else{
        $resultado = "El numero ". $num2 . " es mayor";
    }
    return $resultado;
 }
?>