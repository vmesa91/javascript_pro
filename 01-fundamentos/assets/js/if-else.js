
let a = 5;

if ( a < 20 ) {
    console.log('A es menor a 10')
}

if ( a >= 10  ) {
    console.log('A es mayor o igual a 10')
}else {
    console.log('A es menor a 10')
}

// console.log('Fin del programa')

const hoy = new Date();
let dia = hoy.getDay() // 0 : Domingo...

if (dia === 0) {
    console.log('Domingo')
} else {
    console.log('No es Domingo')
    if ( dia === 1 ) {
        console.log('Lunes')
    } else if ( dia === 2  ) {
        console.log('Martes')
    } 
}

/// IGUALES 
 // = : No es un condicional, es una asignación 
 // == : Condicional que no le importa el tipo, sólo el valor (dia == '2')
 /// === : Condicional que si le importa el tipo, además del valor (dia === 2)


 /* -------------------------------- */

 // Sin usar IF ELSE, SWITCH, ÚNICAMENTE OBJETOS

let day = 10 // O: Domingo, .... 
const weekDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const weekDayObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

if ( day ) {
    console.log( weekDay[day] || 'Día no definido' )
}


