const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/Jay', function(req, res){
    res.send('Welcome back Jay')
})

app.get('/Jay/:id', function(req, res){
    const id = req.params.id
    res.send('Hey Jay' + id)
})

app.listen(9000, function(req, res){
    console.log('Running...')
});
