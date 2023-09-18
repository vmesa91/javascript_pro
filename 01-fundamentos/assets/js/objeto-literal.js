
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



