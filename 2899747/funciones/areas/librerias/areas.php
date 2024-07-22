<?php
/**
 * Calcular las areas
 * Autor: Oscar Mejia
 * Fecha: 07/05/2024
 */
function cuadrado($lado,$lado1){
    $lado = $lado;
    $areaC = $lado * $lado;
    return $areaC;
}
function rectangulo($base,$altura){
    $base = $base;
    $altura = $altura;
    $areaR = $base * $altura;
    return $areaR;
}
function triangulo($base,$altura){
    $base = $base;
    $altura = $altura;
    $areaT= (($base*$altura)/2);
    return $areaT;  
}
function definir($nombre,$dato1,$dato2){
    $dato1 = $dato1;
    $dato2 = $dato2;
    $nombre = $nombre;
    $resultado = "";
    if ($nombre == "cuadrado") {
        $resultado .= "El area del ".strtolower($nombre)." es de:".cuadrado($dato1,null);
    }elseif ($nombre == "rectangulo"){
        $resultado .= " El area del ".strtolower($nombre)."es de ".rectangulo($dato1,$dato2);
    }
    elseif ($nombre == "triangulo"){
       $resultado .= "La area del ".strtolower($nombre)."es de ".triangulo($dato1,$dato2);
    }
    else{
        $resultado ="Error en la operacion";
    }
    return $resultado;
}
?>