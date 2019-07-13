var mongoose = require("mongoose");
var Card = require("./card");

var DeckSchema = new mongoose.Schema(
  {
    user_id: String,
    deckName: String,
    cards: [Card.schema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Deck", DeckSchema);
