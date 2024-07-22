<?php
/**
 * Nomina
 * Autor: Oscar Mejia
 * Fecha: 05/12/2024
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
function subTrans($sueldo){
    $sueldo = $sueldo;
    $subTrans = "";
    if($sueldo>2300000){
        $subTrans = 162000;
    }
    else{
        $subTrans = 0;
    }
    return $subTrans;
}
function retencion($sueldo){
    $sueldo = $sueldo;
    $retencion = "";
    if($sueldo>4600000){
        $retencion = $sueldo * 0.04;
    }
    else{
        $retencion = 0;
    }
    return $retencion;
}
function totalPagar($sueldo,$salud,$pension,$arl, $subTrans, $retencion){
    $sueldo = $sueldo;
    $salud = $salud;
    $pension = $pension;
    $arl = $arl;
    $subTrans = $subTrans;
    $retencion = $retencion;
    $totalPagar= $sueldo + $subTrans - ($salud+$pension+$arl+$retencion);
    return $totalPagar;
}
?>