
/* 
 Dias de semana abrimos a las 11,
 pero los findes de semana abrimos a las 9
*/

// Entra en un sitio web, para consultar si esta abierto...

const dia = 5; // 0: Domingo, 1: Lunes...
const horaActual = 12;

let horaApertura;
let mensaje; // Está abierto, Está cerrado : Abrimos a las XX

/* const tienda = ( dia, horaActual ) => {

    if (dia === 0 || dia === 6) {
        if (horaActual >= 9) { 
            mensaje = 'Está abierto' 
        } else mensaje = 'Está cerrado : Abrimos a las 9AM' 
    } else if (horaActual >= 11) {
        mensaje = 'Está abierto'
    } else mensaje = 'Está cerrado : Abrimos a las 11AM' 

    return mensaje;
} */
const tienda = ( dia, horaActual ) => {

    //if (dia === 0 || dia === 6) {
    if ( [0,6].includes(dia)  ) {

    /*  mensaje = (horaActual >= 9) && 'Está abierto'
        mensaje = mensaje || 'Está cerrado : Abrimos a las 9AM'  */
        mensaje = (horaActual >= 9) && 'Está abierto' || 'Está cerrado : Abrimos a las 9AM'
    

    } else {

    /*  mensaje = (horaActual >= 11) && 'Está abierto'
        mensaje = mensaje || 'Está cerrado : Abrimos a las 11AM' */
        mensaje = (horaActual >= 11) && 'Está abierto' || 'Está cerrado : Abrimos a las 11AM'
    }   

    return mensaje;
}

/* NEXT ITERATION */


const messageAbierto = 'Está abierto'

const tienda2 = ( dia, horaActual ) => {
    //if (dia === 0 || dia === 6) {
    return mensaje = ([0,6].includes(dia)  ) 
    ? (horaActual >= 9) &&  messageAbierto|| 'Está cerrado : Abrimos a las 9AM'
    : (horaActual >= 11) && messageAbierto || 'Está cerrado : Abrimos a las 11AM'
    }   





console.log( tienda2( dia, horaActual ) )