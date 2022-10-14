
 exports.getAddress = async (username, password) => {
     const { AccountManager } = require('@iota/wallet');
     const manager = new AccountManager({
         storagePath: './account-database',
     });
 
     try {
         
        manager.setStrongholdPassword(password);
        const account = manager.getAccount(username);
        console.log('Account:', account.alias());
    
        // Always sync before doing anything with the account
        await account.sync();
        console.log('Syncing...');
    
        // Use the Chrysalis Faucet to send testnet tokens to your address:
        console.log(
            'Fill your address with the Faucet: https://faucet.chrysalis-devnet.iota.cafe/',
        );
    
        const addresses = account.listAddresses();
        console.log('Addresses:', addresses);

        return {
            addresses:addresses,
            resultMessage: "your address found",
        }
    
    } catch (err){
        console.log(err)
        return {
            address:null,
            resultMessage: "Your account not exists or wrong password",
        }
    }
 }

 exports.addAddress = async (username, password)=> {
    const { AccountManager } = require('@iota/wallet');
    const manager = new AccountManager({
        storagePath: './account-database',
    });

    manager.setStrongholdPassword(password);

    try{
        const account = manager.getAccount(username);
        console.log('Account:', account.alias());
    
        // Always sync before doing anything with the account
        await account.sync();
        console.log('Syncing...');
    
        const address = account.generateAddress();
        console.log('New address:', address);
    
        // You can also get the latest unused address:
        const addressObject = account.latestAddress();
        console.log('Address:', addressObject.address);
    
        // Use the Chrysalis Faucet to send testnet tokens to your address:
        console.log(
            'Fill your address with the Faucet: https://faucet.chrysalis-devnet.iota.cafe/',
        );
    
        const addresses = account.listAddresses();
        console.log('Addresses:', addresses);
    
        return {
            newAddress:address,
            addresses:addresses,
            resultMessage: "New address added",
        }
    } catch (err) {
        console.log(err)
        return {
            resultMessage: "account not exists",
        }
    }
 }