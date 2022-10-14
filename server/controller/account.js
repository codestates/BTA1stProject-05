exports.getAccount = (req, res, next) => {
    res.status(200).json({ username: 'testuser', account: 'testaccount', message: 'user account' });
}

exports.createAccount = (req, res, next) => {
    res.status(201).json({ username: 'testuser', account: 'testaccount', message:'user created' });
}