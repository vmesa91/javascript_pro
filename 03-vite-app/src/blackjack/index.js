
import { crearDeck } from './useCases/create-deck';
import { pedirCarta } from './useCases/pedir-carta';
import { turnoComputadora } from './useCases/turno-computadora';
import { acumularPuntos } from './useCases/acumular-puntos';
import { crearCarta } from './useCases/crear-carta';


/* 
  NºC = Carta treboles
  NºD = Carta diamantes
  NºH = Carta corazones
  NºS = Carta espadas
*/

let deck = []; 
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

// Eventos
const butttonAsk = document.querySelector('#btnPedir')
const buttonStop = document.querySelector('#btnDetener')
const buttonNew = document.querySelector('#btnNuevo')

butttonAsk.addEventListener( 'click' , () => {

  const carta = pedirCarta(deck)
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, marcadores)
  crearCarta( carta, 0, tablerosJugadores )

  if (puntosJugador > 21) {
      
      console.warn('Lo siento mucho, perdiste')
      butttonAsk.disabled = true
      buttonStop.disabled = true
      turnoComputadora(puntosJugador, deck, puntosJugadores, marcadores, tablerosJugadores)

  } else if ( puntosJugador === 21 ) {
      
      console.warn('21!!!!')
      butttonAsk.disabled = true
      buttonStop.disabled = true
      turnoComputadora(puntosJugador, deck, puntosJugadores, marcadores, tablerosJugadores)
  }

})

buttonStop.addEventListener( 'click' , () => {
  const puntosJugador = puntosJugadores[0]
  turnoComputadora(puntosJugado, deck, puntosJugadores, marcadores, tablerosJugadores)
  butttonAsk.disabled = true
  buttonStop.disabled = true
})

buttonNew.addEventListener( 'click', () =>  {

  inicializarJuego()

})





