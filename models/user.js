var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastNAME: String,
    email: String,
    password: String,
    decks: [{ type: Schema.Types.ObjectId, ref: "Deck" }],
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
