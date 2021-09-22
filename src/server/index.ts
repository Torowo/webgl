var express = require('express')
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
})
app.get('/list', function (req, res) {
    const data = require('./data/list.ts')
    res.send(data)
})

app.listen(3000)