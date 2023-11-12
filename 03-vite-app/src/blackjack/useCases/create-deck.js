import _ from 'underscore';



const tipos = [ 'C', 'D', 'H', 'S' ],
    figuras = [ 'A', 'J', 'Q', 'K' ];


/**
 * 
 * @returns {Array<String>} Devuelve una baraja nueva de cartas
 */
// Nueva baraja
export const crearDeck = () => {

    if (!tipos || tipos.length === 0) throw new Error('Los tipos son obligatorios') 
    if (!figuras || figuras.length === 0) throw new Error('Las figuras son obligatorios') 

    let deck = [];
  
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