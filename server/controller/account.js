const accountUtil = require('../util/account')

exports.getAccount = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const result = await accountUtil.getAccount(username, password)
    res.status(200).json(result);
}

exports.createAccount = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const result = await accountUtil.createAccount(username, password)
    res.status(200).json(result);
}