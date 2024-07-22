document.addEventListener('DOMContentLoaded', function(){


function bingoC(){
    let bingo = [];
    let i;
    let x = [];
    let filas;
    let i2;
    let x2 = [];
    let x3 = [];
    let resultado;
    for(i = 0 ; i < 5 ; i++){
        filas = [];
        i2;
        for(i2 = 0; i2 < 5 ; i2++){
            es=Math.floor(Math.random()*90)+10;
            filas[i2]=es;
        }
        bingo[i]=filas;

    }
    // Leer
    for(i = 0 ; i < 5 ; i++){
        

    }
    // Letras del Bingo
    console.log("B \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(bingo[i][0])+ " " ;
    }
    console.log("I \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(bingo[i][1])+ " " ;
    }
    console.log("N \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(bingo[i][2])+ " " ;
    }
    console.log("G \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(bingo[i][3])+ " " ;
    }
    console.log("O \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(bingo[i][4])+ " " ;
    }
    // Las x
    x = [bingo[0][0],bingo[0][2],bingo[1][1],bingo[2][0],bingo[2][2]];
    console.log("Primera x \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(x[i]);
    }
    x2 = [bingo[2][0],bingo[2][2],bingo[3][1],bingo[4][0],bingo[4][2]];
    console.log("Segunga x \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(x2[i]);
    }
    x3 = [bingo[0][2],bingo[0][4],bingo[1][3],bingo[2][2],bingo[2][4]];
    console.log("Tercera x \n");
    for(i = 0 ; i < 5 ; i++){
        console.log(x3[i]);
    }


}
})