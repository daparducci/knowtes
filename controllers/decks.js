const Deck = require("../models/deck");

module.exports = {
  createDeck
};

function createDeck(req, res) {
  console.log(req.body);
  Deck.create(req.body).then(function(deck) {
    res.status(201).json(deck);
  });
}
