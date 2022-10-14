const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const accountRoute = require('./routes/account')
const addressRoute = require('./routes/address')
const coinRoute = require('./routes/coin')


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


  app.use('/wallet', accountRoute);
  app.use('/wallet', addressRoute);
  app.use('/wallet', coinRoute);

  app.listen(3000);