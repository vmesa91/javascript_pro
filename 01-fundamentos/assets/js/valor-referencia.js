
let a = 10;
let b = 10; 
a = 30; 

console.log( { a,b } )


let juan = { nombre: 'Juan' };
let ana = juan; 
ana.nombre = 'Ana'

console.log({ juan , ana })

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

const virginia = { nombre: 'Virginia' }
const tony = cambiaNombre( virginia )
console.log( virginia, tony )

// ? Tienen el mismo valor, ya que virginia lo estamos pasando por referencia...se modifica dentro del método y se devuelve. Luego se asigna a tony, por lo que el valor es el mismo
// ! Para copiar objetos, no hacerlo con una asignación simple, ya que apuntamos a la misma referencia

a = b ; // NO! Misma referencia
a = {...b} // Forma correcta

// SOLUCION
const cambiaNombreSolucion = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}


// Arrays

const frutas = [ 'Manzana', 'Pera', 'Piña' ]

// ? Mal
const otrasFrutasMal = frutas; 

// ! Bien
console.time('Spread')
const otrasFrutasBien = [...frutas]
console.timeEnd('Spread')

console.time('Slice')
const otrasFrutasOtra = frutas.slice()
console.timeEnd('Slice')

otrasFrutasMal.push('Mango');
otrasFrutasBien.push('Mango');

//console.table( { frutas, otrasFrutas } )