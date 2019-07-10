var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastNAME: String,
    email: String,
    password: String,
    decks: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
