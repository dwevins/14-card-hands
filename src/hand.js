import Card from 'card';
import getFetch from 'getFetch';

export default class Hand {
  constructor(element, deckID) {
    this.element = element;
    this.deckID = deckID;
    this.url = `https://card-proxy.herokuapp.com/decks/${this.deckID}/draw?count=5`;

    this.cards = [];
  }

  render() {
    this.getDeck();
  }

  getDeck() {
    getFetch(this.url)
      .then((deck) => {
        this.populateHand(deck);
      });
  }

  populateHand(deck) {
    for (let i = 0; i < deck.cards.length; i++) {
      this.cards.push(deck.cards[i]);
    }

    const rowHand = document.createElement('div');
    rowHand.className = 'row__hand';
    this.addCardsToPage(rowHand);
    this.element.appendChild(rowHand);
  }

  addCardsToPage(el) {
    this.cards.forEach((card) => {
      const handCard = document.createElement('div');
      const cardImg = document.createElement('img');
      handCard.className = 'row__hand--card';
      cardImg.className = 'card__img';
      cardImg.setAttribute('src', `${card.images.png}`);
      handCard.appendChild(cardImg);
      el.appendChild(handCard);
    });
  }
}
