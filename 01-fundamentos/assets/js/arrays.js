/* 
const array = new Array(10);

let array2 = [];

 */


let videojuegos = [ 'Mario3', 'Superman', 'Batman' ];
console.log( videojuegos )

let arregloCosas = [
    true, 
    123,
    'Virginia',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    [ 'X', 'Megan', 'Zero', 'Dr. Lifht' ],
]


console.log( arregloCosas[7][3] )
console.log( arregloCosas[7])


let primero = videojuegos[0];
console.log( primero )

let ultimo = videojuegos[ videojuegos.length - 1 ]
console.log( ultimo )

// METODOS
videojuegos.forEach( (elemento, indice, array) => console.log({elemento, indice, array}) )

let nuevaLong = videojuegos.push( 'F-Zero' );
console.log({ nuevaLong , videojuegos })

let nuevaLong2 = videojuegos.unshift( 'First' )
console.log({ nuevaLong2 , videojuegos })

let removeElem = videojuegos.pop()
console.log({ removeElem })

let posicion = 1;
let nuevoArray = videojuegos.splice(posicion,1)
console.log({ nuevoArray })

let metroidIndex = videojuegos.indexOf( 'Superman' )
console.log({ metroidIndex })


