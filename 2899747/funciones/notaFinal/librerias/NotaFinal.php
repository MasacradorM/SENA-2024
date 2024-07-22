<?php
/**
 * Calcular la nota final apartir de otras tres notas
 * Autor: Oscar Mejia
 * Fecha: 07/05/2024
 */
function notaFinal($nota1,$nota2,$nota3){
    $nota1 = $nota1;
    $nota2 = $nota2;
    $nota3 = $nota3;
    $porcentaje1 = $nota1 * 0.3;
    $porcentaje2 = $nota2 * 0.3;
    $porcentaje3 = $nota3 * 0.4;
    $suma = $porcentaje1 + $porcentaje2 + $porcentaje3;
    return $suma;
}
?>