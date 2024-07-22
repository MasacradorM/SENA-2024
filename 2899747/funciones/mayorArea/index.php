<?php
include('librerias/mayorArea.php');
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
    $area1 = area(12);
    $area2 = area(15);
    $area3 = area(8);
    var_dump(areaMayor($area1, $area2, $area3));
    ?>
</body>
</html>