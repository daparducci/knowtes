var mongoose = require("mongoose");

var CardSchema = new mongoose.Schema(
  {
    user_id: String,
    deck_id: String,
    frontCard: String,
    backCard: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Card", CardSchema);
