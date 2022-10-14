const express = require('express');
const router = express.Router()

const addressController = require('../controller/address')

router.get('/address', addressController.getAddress)

router.post('/address', addressController.addAddress)


module.exports = router