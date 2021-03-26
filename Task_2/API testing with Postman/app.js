var express = require('express');
var app = express();

app.get('/getUsers',(req, res) => {
    res.send("Hey Hii")
})

app.get('/getTrain',(req, res) => {
    var cricobj = {
        cricid : 07,
        cricname : "Shubham Varma",
        active: true
    }

    res.send(cricobj)
})

app.listen(8080,function(req, res){
    console.log("We are now connected")
});