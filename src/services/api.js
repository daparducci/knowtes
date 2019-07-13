//create

export function createDeck(deck) {
  console.log("create api.js");
  return fetch("/api/decks", {
    method: "POST",
    body: JSON.stringify({
      deckName: deck.deckName
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

//Create Card

export function createCard(card) {
  return fetch(`/api/decks/${card.deck_id}/card`, {
    method: "POST",
    body: JSON.stringify({
      frontCard: card.frontCard,
      backCard: card.backCard,
      user_id: card.user_id,
      deck_id: card.deck_id
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(res => res.json());
}
