import Hand from 'hand';

export default function deal(element) {
  const container = document.createElement('div');
  container.className = 'container';
  element.appendChild(container);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    fetch('https://card-proxy.herokuapp.com/decks/new')
      .then((res) => res.json())
      .then((deck) => {
        const hand = new Hand(row, deck.deck_id);
        hand.render();
      });
  }
}
