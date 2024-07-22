<?php
include('librerias/tresEdades.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $edad1 = edad(2004);
    $edad2 = edad(2001);
    $edad3 = edad(1998);
    var_dump($edad1);
    var_dump($edad2);
    var_dump($edad3);
    var_dump(definir($edad1, $edad2, $edad3));
    ?>
</body>
</html>