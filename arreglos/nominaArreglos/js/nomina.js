/**
 * Nomina
 * Autor: Oscar Mejia
 * Fecha: 30/04/2024
 */

function mostrarTabla(){
    let tablaInicial= [];
    let i;
    let numeroRegistros;
    let nuevoRegistro;
    
    tablaInicial = [
        {id:1,nombres:'Garp', apellidos:'Monkey D.', cargo:'sub-almirante de la marina', valorDia: 900000, diasTrabajados: 30 },
        {id:2,nombres:'Robin', apellidos:'Nico', cargo:'arqueologa', valorDia: 230000, diasTrabajados: 12 },
        {id:3,nombres:'luffy', apellidos:'Monkey D.', cargo:'boxeador', valorDia: 200000, diasTrabajados: 20 },
        {id:4,nombres:'Zoro', apellidos:'Roronoa', cargo:'levantador de pesas', valorDia: 180000, diasTrabajados: 23 },
        {id:5,nombres:'Sanji', apellidos:'Vismoke', cargo:'cosinero', valorDia: 220000, diasTrabajados: 30 },
        {id:6,nombres:'Nami', apellidos:'la gata', cargo:'navegante', valorDia: 160000, diasTrabajados: 30 },
        {id:7,nombres:'Frnky', apellidos:'Flam', cargo:'carpintero', valorDia: 140000, diasTrabajados: 20 },
        {id:8,nombres:'Chopper', apellidos:'Tonitoni', cargo:'medico', valorDia: 400000, diasTrabajados: 16 },
        {id:9,nombres:'Soul King', apellidos:'Brook', cargo:'musico', valorDia: 120000, diasTrabajados: 20 },
        {id:10,nombres:'Jinbe', apellidos:'Kaikyo', cargo:'nadador', valorDia: 90000, diasTrabajados: 20 }
    ];

    nuevoRegistro = 

    numeroRegistros= tablaInicial.length;
    for(i=0;i<numeroRegistros;i++){
        tablaInicial.push(tablaInicial[i]);
    }
    return tablaInicial;
    }