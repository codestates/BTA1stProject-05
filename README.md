# BTA1stProject-05

### 팀명 : 아이오타닷
### 코인 : IOTA

#### 구조
- server (node.js) : REST API
- client (chrome-extension)

#### REST API (JSON)
- 계정확인
- GET : /wallet/account (username, password)
  - response

```
    {
        "accountId": "wallet-account://f0cefd*********a694",
        "resultMessage": "account exists"
    }
```

- 계정추가
- POST : /wallet/account (username, password)
  - response
```
{
    "accountId": "wallet-account://b3ccc1f*****3240f9",
    "resultMessage": "account created"
}
```

- 주소확인
- GET : /wallet/address (username, password)
  - response
```
{
    "addresses": [
        {
            "address": "atoi1qpv*******nrhp7qef5nlp",
            "balance": 0,
            "keyIndex": 0,
            "internal": false,
            "outputs": {}
        },
        {
            "address": "atoi1qpj3g********rz26tlafvtqktk4",
            "balance": 0,
            "keyIndex": 0,
            "internal": true,
            "outputs": {}
        }
    ],
    "resultMessage": "your address found"
}
```

- 주소추가
- POST : /wallet/address (username, password)
  - response
```
{
    "newAddress": {
        "address": "atoi1qpvf2yel5nmtfh9k7ca39jmseajnjk98mvzy7sk0kux0c4v9d629wntal62",
        "balance": 0,
        "keyIndex": 1,
        "internal": false,
        "outputs": {}
    },
    "addresses": [
        {
            "address": "atoi1qpvmupae9kc546cdyr7rrakdd25kn95d40fsqdk7w5hrdpenrhp7qef5nlp",
            "balance": 0,
            "keyIndex": 0,
            "internal": false,
            "outputs": {}
        },
        ...
        {
            "address": "atoi1qpj3gzxjkuz45dzsa6edawwa3hczgpdpu49hu77ne9dcrz26tlafvtqktk4",
            "balance": 0,
            "keyIndex": 0,
            "internal": true,
            "outputs": {}
        },
    ],
    "resultMessage": "New address added"
}
```

- 잔액
- GET : /wallet/coin (username, password)
  - response
```
{
    "accountId": "wallet-account://f0cefde5f2***096b5a694",
    "balance": 4000000,
    "resultMessage": "check your balance"
}
```

- 코인전송
- POST : /wallet/coin (username, password, address, amount)
  - response
```
{
    "accountId": "wallet-account://f0cefd***67096b5a694",
    "balance": 2500000,
    "resultMessage": "Check your message on https://explorer.iota.org/devnet/message/baa97e9******334a806da6"
}
```