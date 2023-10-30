
class Persona  {

    nombre;
    edad;
    frase;

    constructor( nombre, edad, frase ) {

        if (!nombre) throw Error ('El nombre es obligatorio');
        
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;

    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi edad es: ${ this.edad }`)
    }

    miFrase() {
        console.log(` Soy ${ this.nombre } y mi frase dice : ${ this.frase } `)
    }
}


const spiderman = new Persona( 45, 'Buenas!')
console.log(spiderman)