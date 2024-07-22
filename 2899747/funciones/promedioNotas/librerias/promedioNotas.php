<?php
/**
 * Promedio de tres notas
 * Autor: Oscar Mejia
 * Fecha: 07/05/2024
 */

function promedio($nota1,$nota2,$nota3){
    $nota1 = $nota1;
    $nota2 = $nota2;
    $nota3 = $nota3;
    $promedio = ($nota1+$nota2+$nota3)/3;
    return $promedio;
}
?>