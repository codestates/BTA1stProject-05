const addressUtil = require('../util/address')

exports.getAddress = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const result = await addressUtil.getAddress(username, password)
    res.status(200).json(result);
}

exports.addAddress = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const result = await addressUtil.addAddress(username, password)
    res.status(200).json(result);
}