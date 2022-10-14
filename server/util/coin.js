exports.getBalance = async (username, password) => {
     const { AccountManager } = require('@iota/wallet');
 
     const manager = new AccountManager({
         storagePath: './account-database',
     });
 
     manager.setStrongholdPassword(password);
 
     const account = manager.getAccount(username);
 
     console.log('Account:', account.alias());
 
     // Always sync before doing anything with the account
     await account.sync();
     console.log('Syncing...');
 
     console.log('Available balance', account.balance().available);
     return {
        accountId:account.id(),
        balance: account.balance().available,
        resultMessage: "check your balance",
    }
 }

 exports.sendCoin = async (username, password, address, amount) => {
    
    const {
        AccountManager,
        RemainderValueStrategy,
    } = require('@iota/wallet');

    const manager = new AccountManager({
        storagePath: './account-database',
    });

    manager.setStrongholdPassword(password);
    try {    
        let account = manager.getAccount(username);

        console.log('Alias', account.alias());
        console.log('Syncing...');
        await account.sync();
        const balance = account.balance().available
        console.log('Available balance(before send)', balance);

        const response = await account.send(address, amount, {
            remainderValueStrategy: RemainderValueStrategy.reuseAddress(),
        });

        const message = `Check your message on https://explorer.iota.org/devnet/message/${response.id}`
        console.log(message);
        return {
            accountId:account.id(),
            balance: balance-amount,
            resultMessage: message,
        }
    } catch (err) {
        console.log(err)
        return {
            resultMessage: err,
        }
    }
    
 }