var mongoose = require('mongoose');

//Genre schema

var movieSchema = mongoose.Schema({
     title:{
     	type:String,
        required:true
     },
     create_date:{
     	type: Date,
     	default: Date.now
     },
     genre:{
     	type:String,
        required:true
     },
     director:{
     	type:String,
        required:true
     },
     producer:{
     	type:String,
        required:true
     },
     description:{
     	type:String,
        required:true
     },
     imdb:{
     	type:String,
        required:true
     },
     rotten_tomatoes:{
     	type:String,
        required:true
     },
     trailer:{
     	type:String,
        required:true
     },
     image:{
     	type:String,
        required:true
     }

});

var Movie = module.exports = mongoose.model('Movie',movieSchema);

module.exports.getMovies = function (callback, limit){
	Movie.find(callback).limit(limit);
}