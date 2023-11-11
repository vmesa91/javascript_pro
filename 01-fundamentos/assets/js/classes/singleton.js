
class Singleton {
    
    static instancia; //! Declaración de Singleton = undefined
    nombre = '';
    
    constructor( nombre = '' ){
        
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }

}


const instancia1 = new Singleton('Ironman');
console.log(Singleton.instancia)