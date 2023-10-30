
const vir = {
    nombre: 'Virginia',
    edad: 32,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 23
}

vir.imprimir()


function Persona( nombre, edad ) {
    console.log('Se ejecutó la linea')

    this.nombre = nombre;
    this.edad = edad; 


    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }


}

const maria = new Persona( 'Maria', 43)
const melisa = new Persona( 'Melissa', 23)

/* console.log(maria)
console.log(melisa) */

maria.imprimir()
melisa.imprimir()