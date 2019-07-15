import tokenService from "../utils/tokenService";

//create

export function createDeck(deck) {
  console.log("Console the DECK", deck);
  return fetch("/api/decks", {
    method: "POST",
    body: JSON.stringify(deck),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(res => res.json());
}

//Get Deck

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

//Profile Decks
export function getUser(id) {
  return fetch(`/api/users/${id}`).then(function(res) {
    console.log("this is the res: ", res);
    return res.json();
  });
}

//Show Single Card
export function getCard(id) {
  return fetch(`/api/cards/${id}`).then(function(res) {
    return res.json();
  });
}
