const coinUtil = require('../util/coin')

exports.getBalance = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const result = await coinUtil.getBalance(username, password)
    res.status(200).json(result);
}

exports.sendCoin = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const address = req.body.address
    const amount = req.body.amount
    const result = await coinUtil.sendCoin(username, password, address, amount)
    res.status(200).json(result);
}