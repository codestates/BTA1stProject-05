const express = require("express");
const router = express.Router();

const accountController = require("../controller/account");

// router.get('/account', accountController.getAccount)
router.post("/account", accountController.getAccount);

router.post("/account/new", accountController.createAccount);

module.exports = router;
