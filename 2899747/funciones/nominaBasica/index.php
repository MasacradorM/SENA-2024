<?php
include('librerias/nominaBasica.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nomia</title>
</head>
<body>
    <?php
    $salario = sueldo(120000,29);
    $salud = salud($salario);
    $pension = pension($salario);
    $arl = arl($salario);
    $totalPagar = totalPagar($salario, $salud, $pension, $arl);
    var_dump($salario);
    var_dump($salud);
    var_dump($pension);
    var_dump($arl);
    var_dump($totalPagar);
    ?>
</body>
</html>