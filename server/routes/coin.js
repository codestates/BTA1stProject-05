const express = require('express');
const router = express.Router()

const coinController = require('../controller/coin')

router.get('/coin', coinController.getBalance)

router.post('/coin', coinController.sendCoin)


module.exports = router