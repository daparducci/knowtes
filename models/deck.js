var mongoose = require("mongoose");

var DeckSchema = new mongoose.Schema(
  {
    user_id: String,
    subject: String,
    cards: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Deck", DeckSchema);
