import { pedirCarta } from './pedir-carta'
import { acumularPuntos } from './acumular-puntos'
import { crearCarta } from './crear-carta'
import { alertaCampeon } from './alerta-campeon'
 

/**
 * 
 * @param {Integer} puntosMinimos Puntos Mínimo que necesita la computadora para ganar 
 * @param {Array<String>} deck Baraja 
 */
// Turno Computadora
export const turnoComputadora = ( puntosMinimos , deck, puntosJugadores, marcadores, tablerosJugadores ) => {

    let puntosComputadora = 0;
    
    do {
  
        const carta = pedirCarta(deck)
  
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, marcadores)
  
        crearCarta( carta, puntosJugadores.length - 1, tablerosJugadores  )
  
        if (puntosMinimos > 21) break;
        
    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos = 21 ) )
  
  
    alertaCampeon(puntosJugadores)
  }