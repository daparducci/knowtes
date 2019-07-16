var express = require("express");
var router = express.Router();
var decksController = require("../../controllers/decks");
var cardsController = require("../../controllers/cards");

router.post("/", decksController.createDeck);
router.post("/:id", decksController.editDeck);
router.post("/:id/card", cardsController.addCard);
router.get("/:id", decksController.getDeck);
router.delete("/:id", decksController.deleteDeck);

module.exports = router;
