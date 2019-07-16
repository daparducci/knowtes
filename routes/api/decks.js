var express = require("express");
var router = express.Router();
var decksController = require("../../controllers/decks");
var cardsController = require("../../controllers/cards");

router.post("/", decksController.createDeck);
router.post("/:id/card", cardsController.addCard);
router.get("/:id", decksController.getDeck);
router.delete("/:id", decksController.deleteDeck);

//Protected Routes
router.use(require("../../config/auth"));
router.put("/:id", checkAuth, decksController.editDeck);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
