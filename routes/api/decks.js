var express = require("express");
var router = express.Router();
var decksController = require("../../controllers/decks");

router.post("/", decksController.createDeck);

module.exports = router;
