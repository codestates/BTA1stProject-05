const express = require("express");
const router = express.Router();

const addressController = require("../controller/address");

router.post("/address", addressController.getAddress);

router.post("/address/add", addressController.addAddress);

module.exports = router;
