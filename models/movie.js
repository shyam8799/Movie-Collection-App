var mongoose = requires('mongoose');

//Genre schema

var genreSchema = mongoose.schema({
     name:{
     	type:String,
        required:true
     },
     create_date:{
     	type: Date,
     	default: Dat.now
     }

});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

module.exports.getGenres = function (callback, limit){
	Genre.find(callback).limit(limit);
}