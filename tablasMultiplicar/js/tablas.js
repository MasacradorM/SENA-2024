
//document.addEventListener('DOMContenLoaded'), function(){

    function tablas(){
    var tabla = [];
    var numero = [];
    var cantidad = document.getElementById('txtcantidad').value;
    var tablas = 0;
    var i;
    var resultado = "";
    var resultado1 = "";

    for(tablas=1;tablas<=cantidad;tablas++){

        i = 0;
        for(i=1;i<=20;i++){ 
            resultado =  tablas * i ;
            numero.push(resultado);
        }
        tabla.push(numero);
    }
    console.log(tabla.push(numero));
    for(tablas=1;tablas<=cantidad;tablas++){
        resultado1 += "<br>" + "<div class='col-3'>" + "<br>";
        resultado1 += "<div class='col-12 row '>"
        i = 0;
        for(i=1;i<=20;i++){ 
            resultado1 += "<div class='col-2 borde'>" + "<h6 class='h6'>" + tabla[tablas][i]+ "</h6>" + "</div>"; 
        }
        resultado1 += "</div>" ;
        resultado1 += "</div>" + "<br>";
    }
    document.getElementById('txtresultado1').innerHTML=resultado1;
    }
    

    
//}