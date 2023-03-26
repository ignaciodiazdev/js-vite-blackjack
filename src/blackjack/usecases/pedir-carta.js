/**
 * Esta función me permite tomar una carta
 * @param {Aarray<String>} deck es un arreglo de string
 * @returns {String} Retorna la carta del Deck
 */

export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
