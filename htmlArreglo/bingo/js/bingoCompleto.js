


function Cbingo(){
    let bingo = [];
    let filas = [];
    let i;
    let j;
    let resultado;
    let resultado2;
    let resultado3;
    let resultado4;


    for(i=0;i<5;i++){
        filas = [];
        j = 0;
        for(j=0;j<5;j++){
            filas[j]=Math.floor(Math.random()*98)+1;                                        
        }
        bingo[i]=filas;

    }

    resultado += "<div class='col-12 row '>";

    resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "B" + "</strong>" + "</div>" +  "</div>";
    resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "I" + "</strong>" + "</div>" +  "</div>";
    resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "N" + "</strong>" + "</div>" +  "</div>";
    resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "G" + "</strong>" + "</div>" +  "</div>";
    resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "O" + "</strong>" + "</div>" +  "</div>";

    for(i=0;i<5;i++){


        for(j=0;j<5;j++){

            resultado += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
        }


    }

    resultado += "</div>";

    document.getElementById('r').innerHTML=resultado;

    resultado2 += "<div class='col-12 row '>";

    resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "B" + "</strong>" + "</div>" +  "</div>";
    resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "I" + "</strong>" + "</div>" +  "</div>";
    resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "N" + "</strong>" + "</div>" +  "</div>";
    resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "G" + "</strong>" + "</div>" +  "</div>";
    resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "O" + "</strong>" + "</div>" +  "</div>";

    for(i=0;i<5;i++){



        for(j=0;j<5;j++){

            resultado2 += "<div class='col-2 tamano'>" + "<div class='circulo color"+ j +"'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
        }



    }

    resultado2 += "</div>";

    document.getElementById('r1').innerHTML=resultado2;


    resultado3 += "<div class='col-12 row '>";

    resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "B" + "</strong>" + "</div>" +  "</div>";
    resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "I" + "</strong>" + "</div>" +  "</div>";
    resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "N" + "</strong>" + "</div>" +  "</div>";
    resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "G" + "</strong>" + "</div>" +  "</div>";
    resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "O" + "</strong>" + "</div>" +  "</div>";

    for(i=0;i<5;i++){



        for(j=0;j<5;j++){

            if(i==0&&j==0||i==0&&j==4||i==1&&j==1||i==1&&j==3||i==2&&j==2||i==3&&j==1||i==3&&j==3||i==4&&j==0||i==4&&j==4){
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo colorR'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else{
                resultado3 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
        }


    }

    resultado3 += "</div>";
    document.getElementById('r2').innerHTML=resultado3;


    resultado4 += "<div class='col-12 row '>";

     resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "B" + "</strong>" + "</div>" +  "</div>";
    resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "I" + "</strong>" + "</div>" +  "</div>";
    resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "N" + "</strong>" + "</div>" +  "</div>";
    resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "G" + "</strong>" + "</div>" +  "</div>";
    resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo blanco'>" + "<strong>" +  "O" + "</strong>" + "</div>" +  "</div>";

    for(i=0;i<5;i++){



        for(j=0;j<5;j++){

            if(i==0&&j==0||i==1&&j==1||i==2&&j==0){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo colorAm'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
            }
            else if(i==0&&j==2||i==2&&j==2){
                resultado4 += "<div class='col-2 tamano'>" + "<div class='circulo color3'>" + "<strong>" +  bingo [i][j] + "</strong>" + "</div>" +  "</div>";
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

    }

    resultado4 += "</div>";

    document.getElementById('r3').innerHTML=resultado4;


}