

class Persona {

    static constructorObjeto( { nombre, apellido, pais } ) {
        return new Persona(nombre, apellido, pais)
    }

    constructor( nombre, apellido, pais ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }   

    getInfo() {
        console.log(` Info: ${ this.nombre } , ${ this.apellido } , ${ this.pais } `)
    }

}

const nombre1 = 'Virginia',
      apellido1 = 'Mesa',
      pais1 = 'España'

const daniel = {
      nombre:  'Daniel',
      apellido: 'Mesa',
      pais: 'Francia'
}


const persona1 = new Persona( nombre1, apellido1, pais1 )      
const persona2 = Persona.constructorObjeto( daniel )      

persona1.getInfo()
persona2.getInfo()