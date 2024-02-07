var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('hello world, teste de update');
});

app.listen(3000);