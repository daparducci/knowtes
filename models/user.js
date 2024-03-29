var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var Deck = require("./deck");

const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    decks: [Deck.schema]
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function(next) {
  // 'this' will be set to the current document
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);

// var userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: { type: String, required: true, lowercase: true, unique: true },
//     password: String,
//     decks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deck" }],
//     cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }]
//   },
//   {
//     timestamps: true
//   }
// );
