

//document.addEventListener('DOMContentLoaded', function() {

function Cbingo(){
    let bingo = [];
    let filas = [];
    let i = 0;
    let j;
    let nBingo;
    let resultado;
    let resultado2;
    let resultado3;
    let resultado4;


    for(i=0;i<5;i++){
        filas = [];
        j = 0;
        for(j=0;j<5;j++){
            nBingo = Math.floor(Math.random()*98)+1;
            filas[j]=nBingo;                                        
        }
        bingo[i]=filas;

    }
    for(i=0;i<5;i++){

        resultado += "<div class='col-12 row'>";

        for(j=0;j<5;j++){

            resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
        }

        resultado += "</div>";

    }
    document.getElementById('txtR').innerHTML=resultado;
    for(i=0;i<5;i++){

        resultado2 += "<div class='col-12 row'>";

        for(j=0;j<5;j++){

            resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo color"+ j +"'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
        }

        resultado2 += "</div>";

    }
    document.getElementById('txtR2').innerHTML=resultado2;
    for(i=0;i<5;i++){

        resultado3 += "<div class='col-12 row'>";

        for(j=0;j<5;j++){

            if(i==0&&j==0||i==0&&j==4||i==1&&j==1||i==1&&j==3||i==2&&j==2||i==3&&j==1||i==3&&j==3||i==4&&j==0||i==4&&j==4){
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado3 += "</div>";

    }
    document.getElementById('txtR3').innerHTML=resultado3;
    for(i=0;i<5;i++){

        resultado4 += "<div class='col-12 row'>";

        for(j=0;j<5;j++){

            if(i==0&&j==0||i==1&&j==1||i==2&&j==0){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAm'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==0&&j==2||i==2&&j==2){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorVe'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==2&&j==4||i==0&&j==4||i==1&&j==3){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAz'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==3&&j==2||i==4&&j==1||i==4&&j==3||i==2&&j==3||i==2&&j==1){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado4 += "</div>";

    }
    document.getElementById('txtR4').innerHTML=resultado4;


}
//})


/*
    for(i=0;i<5;i++){

        resultado2 += "<div class='col-12 row controlP'>";

        for(j=0;j<5;j++){

            resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo color"+ j +"'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
        }

        resultado2 += "</div>";

    }
    document.getElementById('txtR2').innerHTML=resultado2;


    for(i=0;i<5;i++){

        resultado3 += "<div class='col-12 row'>";

        for(j=0;j<5;j++){
            if(i==0&&j==0||i==0&&j==4||i==1&&j==1||i==1&&j==3||i==2&&j==2||i==3&&j==1||i==3&&j==3||i==4&&j==0||i==4&&j==4){
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }


            
        }

        resultado3 += "</div>";

    }
    document.getElementById('txtR3').innerHTML=resultado3;

    for(i=0;i<5;i++){

        resultado4 += "<div class='col-12 row controlP'>";

        for(j=0;j<5;j++){

            if(i==0&&j==0||i==1&&j==1||i==2&&j==0){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAm'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==0&&j==2||i==2&&j==2){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorVe'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==2&&j==4||i==0&&j==4||i==1&&j==3){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAz'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==3&&j==2||i==4&&j==1||i==4&&j==3||i==2&&j==3||i==2&&j==1){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
        }

        resultado4 += "</div>";

    }
    document.getElementById('txtR4').innerHTML=resultado4;
*/