exports.createAccount = async (username, password) => {
  const { AccountManager, SignerType } = require("@iota/wallet");

  const manager = new AccountManager({
    storagePath: `./account-database/${username}-database`,
  });

  try {
    let mnemonic;
    manager.setStrongholdPassword(password);
    let account;
    try {
      account = manager.getAccount(username);
    } catch (e) {
      console.log("Couldn't get account, creating a new one");
    }

    // Create account only if it does not already exist
    if (!account) {
      mnemonic = await manager.generateMnemonic();
      console.log("Mnemonic: ", mnemonic);

      manager.storeMnemonic(SignerType.Stronghold, mnemonic);
      account = manager.createAccount({
        clientOptions: {
          node: { url: "https://api.lb-0.h.chrysalis-devnet.iota.cafe" },
          localPow: true,
        },
        alias: username,
      });
      console.log("Account created:", account.id());
    } else {
      return {
        accountId: null,
        resultMessage: "account already exists",
      };
    }

    const synced = await account.sync();
    console.log("Synced account", synced);
    return {
      accountId: account.id(),
      mnemonic: mnemonic,
      resultMessage: "account created",
    };
  } catch (error) {
    console.log("Error: " + error);
    return {
      resultMessage: "account already exists or wrong password",
    };
  }
};

exports.getAccount = async (username, password) => {
  const { AccountManager, SignerType } = require("@iota/wallet");

  const manager = new AccountManager({
    storagePath: `./account-database/${username}-database`,
  });

  try {
    manager.setStrongholdPassword(password);
    let account;
    account = manager.getAccount(username);

    // Create account only if it does not already exist
    if (account) {
      return {
        accountId: account.id(),
        resultMessage: "Login Success!",
      };
    } else {
      return {
        accountId: null,
        resultMessage: "Check your Username or Password",
      };
    }
  } catch (error) {
    console.log("Error: " + error);
    return {
      accountId: null,
      resultMessage: "Check your Username or Password",
    };
  }
};
