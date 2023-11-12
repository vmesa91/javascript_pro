import { valorCarta } from './valor-carta';


/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @param {*} puntosJugadores 
 * @param {*} marcadores 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, marcadores) => {

    puntosJugadores[turno] += valorCarta( carta )
    marcadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }