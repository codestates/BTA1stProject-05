/**
 * This example generates a new address.
 */

 require('dotenv').config();

 async function run() {
     const { AccountManager } = require('@iota/wallet');
     const manager = new AccountManager({
         storagePath: './account-database',
     });
 
     manager.setStrongholdPassword(process.env.SH_PASSWORD);
 
     const account = manager.getAccount('Alice');
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
 }
 
 run();