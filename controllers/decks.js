const Deck = require("../models/deck");
const User = require("../models/user");

module.exports = {
  createDeck,
  getDeck,
  editDeck,
  deleteDeck
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

function getDeck(req, res) {
  console.log("REQ PARAMS ID: ", req.params.id);
  Deck.findById(req.params.id).then(function(deck) {
    console.log("deck used in promise: ", deck);
    res.status(200).json(deck);
  });
}

function editDeck(req, res) {
  console.log("EditDeck ", req.body);
  Deck.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    deck
  ) {
    console.log("This is the DECK: ", deck);
    res.status(200).json(deck);
  });
}

function deleteDeck(req, res) {
  console.log("Delete Deck Controller", req.body.user_id, req.params);
  // User.findById(req.body.user_id).then(function(err, user) {
  //   console.log("This is the user: ", user);
  //   user.decks.id(req.params.id).remove();
  //   user.save(function(err) {
  //     res.status(200).json(user);
  //   });
  // });

  User.findById(req.body.user_id, function(err, user) {
    console.log("This is the user: ", user);
    user.decks.id(req.params.id).remove();
    user.save(function(err) {
      res.status(200).json(user);
    });
  });
  // Deck.findByIdAndRemove(req.params.id).then(function(deck) {
  //   console.log("This is the DECK: ", deck);
  //   res.status(200).json(deck);
  // });
}
