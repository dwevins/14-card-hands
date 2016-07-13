import Hand from 'hand';

export default function deal(element) {
  const container = element.querySelector('.container');
  for (let i = 0; i < 5; i++) {
    fetch('https://card-proxy.herokuapp.com/decks/new')
      .then((res) => res.json())
      .then((deck) => {
        const hand = new Hand(container, deck.deck_id);
        hand.render();
      });
  }
}
