
let personaje = {
    nombre: 'Toni Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 345.043,
        lng: -113.50
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
}

console.log( 'Nombre: ', personaje.nombre )
console.log( 'Nombre: ', personaje['nombre'] )
console.log( 'Edad: ', personaje.edad )
console.log( 'Coords: ', personaje['coords'].lat )

console.log( 'No. Trajes: ', personaje['trajes'].length )
console.log( 'Ult. Trajes: ', personaje['trajes'][ personaje['trajes'].length - 1] )


// !? More details

// Borrar un elemento
delete personaje.trajes[0]
console.log( personaje )

delete personaje.coords
console.log( personaje )

// Añadir un elemento
personaje.casado = true;

// Convertir a array
const entriesPares = Object.entries( personaje )
console.log( entriesPares )

// Bloqueo de las propiedades de un objeto
Object.freeze( personaje ); 
// ! Si lo ponemos como Const, únicamente no nos permitirá asignarlo directamente a otra cosa, pero si podemos modificar las propiedades


// Obtener todas las propiedades
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje )

console.log({ propiedades, valores })


