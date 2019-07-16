var mongoose = require("mongoose");
var Deck = require("./deck");

var CardSchema = new mongoose.Schema(
  {
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
