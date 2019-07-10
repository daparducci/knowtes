var mongoose = require("mongoose");

var DeckSchema = new mongoose.Schema(
  {
    user_id: String,
    subject: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Deck", DeckSchema);
