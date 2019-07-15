const Deck = require("../models/deck");
const User = require("../models/user");

module.exports = {
  createDeck
};

// function createDeck(req, res) {
//   var user = req.body.user;
//   console.log("LOOKING FOR THE FUCKING USER: ", req.body.user._id);
//   Deck.create(req.body).then(function(deck) {
//     user.decks.push(deck);

//     return res.status(201).json(deck);
//   });
// }

// function getAllDecks(req, res) {
//   Deck.find({}).then(function(deck) {
//     console.log(deck);
//     res.status(200).json(deck);
//   });
// }

function createDeck(req, res) {
  User.findById(req.body.user._id).exec(function(err, user) {
    Deck.create(req.body, function(err, deck) {
      user.decks.push(deck);
      deck.save();
      user.save();
      res.status(200).json(deck);
    });
  });
}
