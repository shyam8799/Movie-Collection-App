var express =require ("express");
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ("mongoose");

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre=require ('./models/genre');
Movie=require ('./models/movie');

////conect to mongoose

mongoose.connect ('mongodb://localhost/moviestore');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('This is my app');
});

app.get ('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
        if(err){
        	throw err;
        }
        res.json(genres);

	});
});
app.get ('/api/movies',function(req,res){
	Movie.getMovies(function(err,movies){
        if(err){
        	throw err;
        }
        res.json(movies);

	});

});

app.listen (3000);

console.log ('Running on app:3000...');