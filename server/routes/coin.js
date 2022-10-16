const express = require("express");
const router = express.Router();

const coinController = require("../controller/coin");

router.post("/coin/balance", coinController.getBalance);

router.post("/coin/send", coinController.sendCoin);

module.exports = router;
