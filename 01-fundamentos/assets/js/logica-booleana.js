
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
