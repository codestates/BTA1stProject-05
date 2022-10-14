require('dotenv').config();

async function run() {
    const {
        AccountManager,
        RemainderValueStrategy,
    } = require('@iota/wallet');

    const manager = new AccountManager({
        storagePath: './account-database',
    });

    manager.setStrongholdPassword(process.env.SH_PASSWORD);

    const account = manager.getAccount('Alice');

    console.log('Alias', account.alias());
    console.log('Syncing...');
    await account.sync();
    console.log('Available balance', account.balance().available);

    //TODO: Replace with the address of your choice!
    // Alice2 address (Alice -> Alice2)
    const address =
        'atoi1qqnxm276q94jxlsne5fvfnavakhsjdtlgxdax7j9dlqrejkwdl6s62f4a5u';
    // amount >= 1000000    
    const amount = 1500000;

    const response = await account.send(address, amount, {
        remainderValueStrategy: RemainderValueStrategy.reuseAddress(),
    });

    console.log(
        `Check your message on https://explorer.iota.org/devnet/message/${response.id}`,
    );
}

run();