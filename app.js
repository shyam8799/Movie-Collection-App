var express =require ("express");
var app = express();

var mongoose = require ("mongoose");

Genre=require ('./models/genre');

////conect to mongoose

mongoose.connect ('mongodb://localhost/moviestore');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('This is my app');
});

app.listen (3000);

console.log ('Runningo app:3000...');