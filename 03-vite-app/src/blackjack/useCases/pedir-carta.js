
/**
 * 
 * @param {Array<String>} deck Baraja
 * @returns {String} Carta escogida
 */

// Funcion para pedir Carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    return deck.pop(); 
  }