exports.createAccount = async (username, password) => {
    const { AccountManager, SignerType } = require('@iota/wallet');

    const manager = new AccountManager({
        storagePath: './account-database',
    });

    try {
        manager.setStrongholdPassword(password);
        let account;
        try {
            account = manager.getAccount(username);
        } catch (e) {
            console.log("Couldn't get account, creating a new one");
        }

        // Create account only if it does not already exist
        if (!account) {
            manager.storeMnemonic(SignerType.Stronghold);
            account = manager.createAccount({
                clientOptions: {
                    node: { url: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe' },
                    localPow: true,
                },
                alias: username,
            });
            console.log('Account created:', account.id());
        }else {
            return {
                accountId:null,
                resultMessage: "account already exists",
            }
        }

        const synced = await account.sync();
        console.log('Synced account', synced);
        return {
            accountId:account.id(),
            resultMessage: "account created",
        }
    } catch (error) {
        console.log('Error: ' + error);
    }
}


exports.getAccount = async (username, password) => {
    const { AccountManager, SignerType } = require('@iota/wallet');

    const manager = new AccountManager({
        storagePath: './account-database',
    });

    try {
        manager.setStrongholdPassword(password);
        let account;
        account = manager.getAccount(username);

        // Create account only if it does not already exist
        if (account) {
            return {
                accountId:account.id(),
                resultMessage: "account exists",
            }
        } else {
            return {
                accountId:null,
                resultMessage: "account not exists",
            }
        }
    } catch (error) {
        console.log('Error: ' + error);
        return {
            accountId:null,
            resultMessage: "account not exists",
        }
    }
}