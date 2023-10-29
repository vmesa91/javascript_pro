(() => {

    'use strict'

/* 
    NºC = Carta treboles
    NºD = Carta diamantes
    NºH = Carta corazones
    NºS = Carta espadas
*/

let deck = []; 
const tipos = [ 'C', 'D', 'H', 'S' ],
      figuras = [ 'A', 'J', 'Q', 'K' ];


let puntosJugadores = [];

const marcadores = document.querySelectorAll('small'),
      tableroJugador = document.getElementById('jugador-carta'),
      tableroComputadora = document.getElementById('computadora-carta');


// ! Inicio del juego
const inicializarJuego = ( numJugadores = 2 ) => {
    deck = crearDeck();
}
    
// Nueva baraja
const crearDeck = () => {

    deck = [];

    for ( let i=2; i <= 10; i++ ) {
        for ( let tipo of tipos ) {
            deck.push( i + tipo )
        }
    } 
     
    for ( let tipo of tipos ) {
        for ( let figura of figuras ) {
            deck.push( figura + tipo )
        }
    }

    return _.shuffle(deck); 
}

// Funcion para pedir Carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    return deck.pop(); 
}

/* const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length - 1 )
    let puntos = 0;

    if ( isNaN(valor)  ){  
    
        // Los As valen 11, el resto de figuras valen 10
        puntos = ( valor === 'A' ) ? 11 : 10;

    } else {
    
        puntos = valor * 1 // Para transformar a string;
    
    }

    return puntos

} */

// Puntaje de la carta 
const valorCarta = ( carta ) => {
    
    const valor = carta.substring( 0, carta.length - 1 )
    return isNaN( valor ) 
                ? (valor === 'A' ) ? 11 : 10
                : valor * 1                   
}


const acumularPuntos = (  ) => {
    puntosJugadores
}


// Turno Computadora
const turnoComputadora = ( puntosMinimos ) => {
    
    do {

        const carta = pedirCarta()

        puntosComputadora += valorCarta( carta )
        marcadores[1].innerText = puntosComputadora

        const cartaNew = document.createElement('img')
        cartaNew.src = `assets/cartas/${carta}.png`
        cartaNew.classList.add('carta')
        tableroComputadora.append(cartaNew)



        if (puntosComputadora > 21) break;
        
    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) )

    setTimeout(() => {
        
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana')
        }else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana')    
        }

    }, 10);


}

// Eventos
const butttonAsk = document.querySelector('#btnPedir')
const buttonStop = document.querySelector('#btnDetener')
const buttonNew = document.querySelector('#btnNuevo')

butttonAsk.addEventListener( 'click' , () => {

    const carta = pedirCarta()

    const cartaNew = document.createElement('img')
    cartaNew.src = `assets/cartas/${carta}.png`
    cartaNew.classList.add('carta')
    tableroJugador.append(cartaNew)

    puntosJugador += valorCarta( carta )
    console.log(puntosJugador)
    marcadores[0].innerText = puntosJugador

    if (puntosJugador > 21) {
        
        butttonAsk.disabled = true
        buttonStop.disabled = true
        turnoComputadora(puntosJugador)

    } else if ( puntosJugador === 21 ) {
        
        butttonAsk.disabled = true
        buttonStop.disabled = true
        turnoComputadora(puntosJugador)
    }

})

buttonStop.addEventListener( 'click' , () => {
    turnoComputadora(puntosJugador)
    butttonAsk.disabled = true
    buttonStop.disabled = true
})

buttonNew.addEventListener( 'click', () =>  {
/*     deck = []
    crearDeck() */

    inicializarJuego()
    marcadores[0].innerText = 0
    marcadores[1].innerText = 0

    tableroJugador.innerHTML = ''
    tableroComputadora.innerHTML = ''
    



})


})()



