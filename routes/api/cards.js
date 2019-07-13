var express = require("express");
var router = express.Router();
var cardController = require("../../controllers/cards");

router.post("/", cardController.addCard);

module.exports = router;
