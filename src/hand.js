import Card from 'card';
import getFetch from 'getFetch';

export default class Hand {
  constructor(element, deckID) {
    this.element = element;
    this.deckID = deckID;

    this.cards = {
      card1: '',
      card2: '',
      card3: '',
      card4: '',
      card5: '',
    };
  }

  render() {
    const deck = this.getDeck();
    this.populateHand(deck);
  }

  getDeck() {
    const url = `https://card-proxy.herokuapp.com/decks/${this.deckID}/draw?count=5`;
    return getFetch(url);
  }

  populateHand(deck){

  }
}
