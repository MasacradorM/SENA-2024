<?php
/**
 * Definir que area es mayor
 * Autor: Oscar Mejia
 * Fecha: 05/12/2024
 */
function area($lado){
    $lado = $lado;
    $area = $lado * $lado;
    return $area;
}
 function areaMayor($area1,$area2, $area3){
    $area1 = $area1;
    $area2 = $area2; 
    $area3 = $area3;
    $reasultado = "";
    if($arae1 == $area2 && $area2 == $area3){
        $reasultado = "Las tres areas son iguales";
    }
    else if ($area1>$area2 && $area1 > $area3){
        $reasultado = "El area del primer cuadrado es mayor";
    }
    else if($area2>$area1 && $area2 > $area3){
        $reasultado = "El area del segundo cuadrado es mayor";
    }
    else {
        $reasultado"El area del tercer cuadrado es mayor";
    }
    return $reasultado;
 }
?>