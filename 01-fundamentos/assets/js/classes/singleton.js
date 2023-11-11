
class Singleton {
    
    static instancia; //! Declaración de Singleton = undefined
    nombre = '';
    
    constructor( nombre = '' ){

        if ( !!Singleton.instancia ) {
            // Si ya existe una instancia
            return Singleton.instancia
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }

}


const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black');
console.log(instancia1.nombre)  // Ironman
console.log(instancia2.nombre)  // Ironman
console.log(instancia3.nombre)  // Ironman