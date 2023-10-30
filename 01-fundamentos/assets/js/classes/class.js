
class Persona  {

    // Desde Persona directamente, sin isntanciar nada
    static _conteo = 0; 
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hola a todos, soy un método estático')
    }

    // Propiedades de la clase

    nombre;
    edad;
    frase;
    comida;

    constructor( nombre, edad, frase ) {

        if (!nombre) throw Error ('El nombre es obligatorio');
        
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;

        Persona._conteo++;

    }

    /**
     * @param {string} comida
     */
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase(); 
    }

    get getComidaFavorita() {
        return this.comida;
    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi edad es: ${ this.edad }`)
    }

    miFrase() {
        console.log(` Soy ${ this.nombre } y mi frase dice : ${ this.frase } `)
    }
}


const spiderman = new Persona( 'Spiderman', 45, 'Buenas!')
const batman = new Persona( 'Spiderman', 45, 'Buenas!')
console.log(spiderman)

spiderman.setComidaFavorita = 'pizza';

spiderman.comida = 'Pizza';

console.log(spiderman.getComidaFavorita)

console.log(spiderman.comida)

console.log('Conteo', Persona._conteo)
console.log(Persona.conteo)
Persona.mensaje()

Persona.propiedadExterna = 'Hola mundo';