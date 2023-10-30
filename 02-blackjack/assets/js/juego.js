const miModulo = (() => {

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
      tablerosJugadores = document.querySelectorAll('.divCartas');


// ! Inicio del juego
const inicializarJuego = ( numJugadores = 2 ) => {

    console.clear()
    
    deck = crearDeck();

    puntosJugadores = []; 

    for (let i = 0; i < numJugadores; i ++ ) {
        puntosJugadores.push(0)   
        marcadores[i].innerText = 0; 
        tablerosJugadores[i].innerHTML = '';
    }

    butttonAsk.disabled = false
    buttonStop.disabled = false
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


const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] += valorCarta( carta )
    marcadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}


const crearCarta = ( carta, turno ) => {

    const cartaNew = document.createElement('img')
    cartaNew.src = `assets/cartas/${carta}.png`
    cartaNew.classList.add('carta')
    tablerosJugadores[turno].append(cartaNew)

}

const alertaCampeon = () => {

    const [ puntosMinimos, puntosComputadora  ] = puntosJugadores 

    setTimeout(() => {
        
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana')
        }else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana')    
        }

    }, 20);

}

// Turno Computadora
const turnoComputadora = ( puntosMinimos ) => {

    let puntosComputadora = 0;
    
    do {

        const carta = pedirCarta()

        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)

        crearCarta( carta, puntosJugadores.length - 1  )

        if (puntosMinimos > 21) break;
        
    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos = 21 ) )


    alertaCampeon()
}

// Eventos
const butttonAsk = document.querySelector('#btnPedir')
const buttonStop = document.querySelector('#btnDetener')
const buttonNew = document.querySelector('#btnNuevo')

butttonAsk.addEventListener( 'click' , () => {

    const carta = pedirCarta()
    const puntosJugador = acumularPuntos(carta, 0)
    crearCarta( carta, 0 )

    if (puntosJugador > 21) {
        
        console.warn('Lo siento mucho, perdiste')
        butttonAsk.disabled = true
        buttonStop.disabled = true
        turnoComputadora(puntosJugador)

    } else if ( puntosJugador === 21 ) {
        
        console.warn('21!!!!')
        butttonAsk.disabled = true
        buttonStop.disabled = true
        turnoComputadora(puntosJugador)
    }

})

buttonStop.addEventListener( 'click' , () => {
    const puntosJugador = puntosJugadores[0]
    turnoComputadora(puntosJugador)
    butttonAsk.disabled = true
    buttonStop.disabled = true
})

buttonNew.addEventListener( 'click', () =>  {

    inicializarJuego()

})

return {
    nuevoJuego: inicializarJuego 
}

})()



