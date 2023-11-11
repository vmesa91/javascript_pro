class Persona  {

    // Desde Persona directamente, sin instanciar nada
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

    constructor( nombre = 'Sin nombre', edad = 'Sin edad', frase = 'Sin frase') {

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

class Heroe extends Persona {

    clan = 'Sin Clan';

    constructor( nombre, edad, frase ) {
        super( nombre, edad, frase )
        this.clan = 'Los Avengers'
    }

    quienSoy() {
        console.log(` Soy ${ this.nombre } y mi clan es ${ this.clan } `)
        super.quienSoy()
    }
 
}


const spiderman = new Heroe('Spiderman', 34, 'Hola, soy Spiderman')

console.log(spiderman)

spiderman.quienSoy()