var express = require("express");
var router = express.Router();
var decksController = require("../../controllers/decks");
var cardsController = require("../../controllers/cards");

router.post("/", decksController.createDeck);
router.post("/:id/card", cardsController.addCard);

module.exports = router;
