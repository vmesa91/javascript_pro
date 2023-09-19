
/* function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
} */

function crearPersona(nombre, apellido) {
    return { nombre,apellido }
}

const persona = crearPersona('Virginia' , 'Mesa')
console.log( persona )

const persona2 = (nombre, apellido) => ({ nombre,apellido })
console.log( persona2('Virginia', 'Mesa') )

function imprimeArgumentos() {
    console.log( arguments )   
}

const imprimeArgumentos2 = ( edad, año, vivo, ...args ) => {
    console.log( {edad, año, vivo, args} )
    return args
}

imprimeArgumentos( 10, 40, true, false, 'Virginia', [3, true] )
const argumentos = imprimeArgumentos2( 10, 40, true, false, 'Virginia', [3, true] )

console.log({ argumentos })

// Los tres primeros no vienen, porque tienen su propia variable : edad, año, vivo
const [ casado, mujer, hijos ] = imprimeArgumentos2( 10, 40, true, false, 'Virginia', [3, true] )
console.log( { casado, mujer, hijos } )

// Devuelve un objeto
const persona3 = crearPersona('Virginia' , 'Mesa')
// Renombrar la variable
const { apellido: nuevoApellido } = crearPersona('Virginia' , 'Mesa')
console.log( {nuevoApellido} )


const tony = {
    nombre: 'Toni Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
}

// Esto es la version antiguao
/* const imprimeTony = ( personaje ) => {
    console.log( 'Nombre' , personaje.nombre )
    console.log( 'Code Nombre ' , personaje.codeName )
    console.log( 'Vivo ' , personaje.vivo )
    console.log( 'Edad ' , personaje.edad )
    console.log( 'Trajes ' , personaje.trajes )
} */

const imprimeTony = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {
    console.log( { nombre } )
    console.log( { codeName } )
    console.log( { vivo } )
    console.log( { edad } )
    console.log( { trajes } )

}


imprimeTony(tony)