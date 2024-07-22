<?php
/**
 * Nota Final
 * Autor: Oscar Mejia
 * Fecha: 12/05/2024
 */

 function nota($nota,$decimal){
    $nota = $nota;
    $decimal = $decimal
    $porcentaje = $nota * $decimal;
    return $porcentaje;
 }
 function notaFinal($nota1, $nota2, $nota3){
    $nota1 = $nota1;
    $nota2 = $nota2;
    $nota3 = $nota3;
    $suma = $nota1 + $nota2 + $nota3;
    $resultado;
    if($suma>4.5){
        $resultado = "La calificación es superior";
    }
    else if($suma<=4.5 && $suma>3.5){
        $resultado = "La calificación es alta";
    }
    else if($suma<=3.5 && $suma>3){
        $resultado = "La calificación es media";
    }
    else{
        $resultado = "La calificación es mala";
    }
    return $resultado;
 }
?>