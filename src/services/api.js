//create

export function createDeck(post) {
  console.log("create api.js");
  return fetch("/api/decks", {
    method: "POST",
    body: JSON.stringify({
      deckName: post.deckName
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}
