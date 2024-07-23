

//document.addEventListener('DOMContentLoaded', function() {

function Cbingo(){
    let bingo = [];
    let filas = [];
    let nBingo;
    let resultado;
    let resultado2;
    let resultado3;
    let resultado4; 
    // Creacion del arrreglo del bingo    
    for(let iteracion=0;iteracion<5;iteracion++){
        filas = [];
         let iteracion2 = 0;
        for(iteracion2=0;iteracion2<5;iteracion2++){
            nBingo = Math.floor(Math.random()*98)+1;
            filas[iteracion2]=nBingo;                                        
        }
        bingo[iteracion]=filas;

    }
    // se recorre el arreglo para mostrar el bingo en el index - Bingo normal
    for(iteracion=0;iteracion<5;iteracion++){

        resultado += "<div class='col-12 row'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
        }

        resultado += "</div>";

    }
    document.getElementById('txtR').innerHTML=resultado;
    // Bingo - letras
    for(iteracion=0;iteracion<5;iteracion++){

        resultado2 += "<div class='col-12 row'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo color"+ iteracion2 +"'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
        }

        resultado2 += "</div>";

    }
    document.getElementById('txtR2').innerHTML=resultado2;
    // Bingo - X grande 
    for(iteracion=0;iteracion<5;iteracion++){

        resultado3 += "<div class='col-12 row'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            if(iteracion == iteracion2 || bingo.length-1 == iteracion + iteracion2){
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado3 += "</div>";

    }
    document.getElementById('txtR3').innerHTML=resultado3;
    // Bingo - 3X pequeñas 
    for(iteracion=0;iteracion<5;iteracion++){

        resultado4 += "<div class='col-12 row'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            if(iteracion==0&&iteracion2==0||iteracion==1&&iteracion2==1||iteracion==2&&iteracion2==0){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAm'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==0&&iteracion2==2||iteracion==2&&iteracion2==2){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorVe'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==2&&iteracion2==4||iteracion==0&&iteracion2==4||iteracion==1&&iteracion2==3){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAz'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==3&&iteracion2==2||iteracion==4&&iteracion2==1||iteracion==4&&iteracion2==3||iteracion==2&&iteracion2==3||iteracion==2&&iteracion2==1){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado4 += "</div>";

    }
    document.getElementById('txtR4').innerHTML=resultado4;


}
//})


/*
    for(iteracion=0;i<5;i++){

        resultado2 += "<div class='col-12 row controlP'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo color"+ iteracion2 +"'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
        }

        resultado2 += "</div>";

    }
    document.getElementById('txtR2').innerHTML=resultado2;


    for(iteracion=0;i<5;i++){

        resultado3 += "<div class='col-12 row'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){
            if(iteracion==0&&iteracion2==0||iteracion==0&&iteracion2==4||iteracion==1&&iteracion2==1||iteracion==1&&iteracion2==3||iteracion==2&&iteracion2==2||iteracion==3&&iteracion2==1||iteracion==3&&iteracion2==3||iteracion==4&&iteracion2==0||iteracion==4&&iteracion2==4){
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }


            
        }

        resultado3 += "</div>";

    }
    document.getElementById('txtR3').innerHTML=resultado3;

    for(iteracion=0;i<5;i++){

        resultado4 += "<div class='col-12 row controlP'>";

        for(iteracion2=0;iteracion2<5;iteracion2++){

            if(iteracion==0&&iteracion2==0||iteracion==1&&iteracion2==1||iteracion==2&&iteracion2==0){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAm'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==0&&iteracion2==2||iteracion==2&&iteracion2==2){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorVe'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==2&&iteracion2==4||iteracion==0&&iteracion2==4||iteracion==1&&iteracion2==3){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAz'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else if(iteracion==3&&iteracion2==2||iteracion==4&&iteracion2==1||iteracion==4&&iteracion2==3||iteracion==2&&iteracion2==3||iteracion==2&&iteracion2==1){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [iteracion][iteracion2] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado4 += "</div>";

    }
    document.getElementById('txtR4').innerHTML=resultado4;
*/