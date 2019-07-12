const Deck = require("../models/deck");

module.exports = {
  createDeck
};

function createDeck(req, res) {
  console.log("decks.js hit");
  Deck.create(req.body).then(function(post) {
    res.status(201).json(post);
  });
}
