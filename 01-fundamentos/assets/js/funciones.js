
function saludar(nombre) {
    console.log(arguments) // imprime todos los argumentos pasados
    console.log('Hola ' + nombre)
}

saludar()

const saludar2 = function() {
    console.log('Hola Mundo 2')
}

saludar2()


saludar( 'Virginia', 33, true, 'España' )


// Lambda function
const saludar3 = ( nombre ) => {
    console.log('Hola flecha' + nombre)
} 

saludar3( 'Virginia' )


const getAleatorio = () => Math.random()
console.log( getAleatorio() )