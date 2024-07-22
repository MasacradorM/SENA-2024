<?php
/**
 * Nomina Basica
 * Autor: Oscar Mejia
 * Fecha:07/05/2024
 */
function sueldo($valorD,$diasT){
    $valorD = $valorD;
    $diasT = $diasT;
    $sueldo = $valorD * $diasT;
    return $sueldo;
}
function salud($sueldo){
    $sueldo = $sueldo;
    $salud = 0.12 * $sueldo;
    return $salud;
}
function pension($sueldo){
    $sueldo = $sueldo;
    $pension = $sueldo * 0.16;
    return $pension;
}
function arl($sueldo){
    $sueldo = $sueldo;
    $arl = $sueldo * 0.052;
    return $arl;
}
function totalPagar($sueldo,$salud,$pension,$arl){
    $sueldo = $sueldo;
    $salud = $salud;
    $pension = $pension;
    $arl = $arl;
    $totalPagar= $sueldo - ($salud+$pension+$arl);
    return $totalPagar;
}
?>