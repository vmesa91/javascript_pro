

export const crearCarta = ( carta, turno, tablerosJugadores ) => {

    const cartaNew = document.createElement('img')
    cartaNew.src = `assets/cartas/${carta}.png`
    cartaNew.classList.add('carta')
    tablerosJugadores[turno].append(cartaNew)
  
  }
  