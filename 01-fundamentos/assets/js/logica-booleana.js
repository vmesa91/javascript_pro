
const regresaTrue = () => {
    console.log('Regresa True')
    return true;
}

const regresaFalse= () => {
    console.log('Regresa False')
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ) // true

console.warn('And - && ') // True si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log( regresaFalse() && regresaTrue() ) // False : No ejecuta el regresaTrue, no es neceario
console.log( regresaTrue() && regresaFalse() )

regresaFalse() && regresaTrue() // -> Ejecuta regresaTrue si regresaFalse es True

console.warn(' OR - || ')
console.log( true || false )

console.log( regresaTrue() || regresaFalse() ) // No eejecuta la segunda, porque ya va a dar True


console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // a1 = 150
const a2 = false && 'Hola Mundo' && 150; // a1 = false
const a3 = 'Hola' && 'Mundo'; // a3 = 'Mundo'
const a4 = 'Hola' && 'Mundo' && soyFalso && true; // a4 = false

const a5 = soyFalso || 'Ya no soy falso' // a5 : 'Ya no soy falso'
const a6 = soyFalso || soyNull || soyUndefined ||  'Ya no soy falso' // a6 : 'Ya no soy falso'
const a7 = soyFalso || soyNull || soyUndefined // a7 : undefined
console.log({ a1 , a3 , a4, a5, a6, a7 })


