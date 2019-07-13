var mongoose = require("mongoose");

var CardSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    deck_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deck" }],
    frontCard: {
      type: String,
      required: true
    },
    backCard: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Card", CardSchema);
