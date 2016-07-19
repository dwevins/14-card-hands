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
    for (let i = 0; i < 5; i++) {
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
      const cardValue = document.createElement('p');
      handCard.className = 'row__hand--card';
      cardImg.className = 'card__img';
      cardValue.className = 'card__value';
      cardImg.setAttribute('src', `${card.image}`);
      cardValue.innerText = `${card.value}`;
      handCard.appendChild(cardImg);
      handCard.appendChild(cardValue);
      el.appendChild(handCard);
    });
  }
}
