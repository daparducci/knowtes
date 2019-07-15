const Card = require("../models/card");
const Deck = require("../models/deck");

module.exports = {
  addCard,
  getCard
};

function addCard(req, res) {
  console.log("add card hit");
  Deck.findById(req.params.id).then(function(deck) {
    console.log("before push");
    deck.cards.push(req.body);
    console.log("My Deck: ", deck);
    deck.save(function(deck) {
      res.status(200).json(deck);
    });
  });
}

async function getCard(req, res) {
  await Deck.findById(req.params.id).then(function(deck) {
    res.status(200).json(deck);
  });
}
