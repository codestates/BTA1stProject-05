const express = require('express');
const path = require('path');
var cors = require('cors')
const apiRouter = require('./routes/api');

const app = express();

app.set('port', process.env.PORT || 4000);

const config = require('./config/config');
const cors_allow = config.development.cors_allow;
app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.json(`${req.method}: ${req.url}`);
})

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});