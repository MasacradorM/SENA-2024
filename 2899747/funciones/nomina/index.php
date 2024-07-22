<?php
include('librerias/nomina.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nomina</title>
</head>
<body>
<?php
    $salario = sueldo(120000,29);
    $salud = salud($salario);
    $pension = pension($salario);
    $arl = arl($salario);
    $subTrans = subTrans($salario);
    $retencion = retencion($salario);
    $totalPagar = totalPagar($salario, $salud, $pension, $arl, $subTrans, $retencion);
    var_dump($salario);
    var_dump($salud);
    var_dump($pension);
    var_dump($arl);
    var_dump($subTrans);
    var_dump($retencion);
    var_dump($totalPagar);
    ?>
</body>
</html>