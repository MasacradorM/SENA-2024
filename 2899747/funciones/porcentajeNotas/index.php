<?php
include('librerias/porcentajeN.php');
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
    $nota1 = nota(4.5,0.2);
    $nota2 = nota(4.8,0.35);
    $nota3 = nota(4.9,0.45);
    var_dump(notaFinal($nota1, $nota2, $nota3));
    ?>
</body>
</html>