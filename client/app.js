var movieStore= angular.module('movieStore',['ngRoute']);

movieStore.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'MoviesController',
		templateUrl:'view/movie.html'
	})
	.when('/movies',{
		controller:'MoviesController',
		templateUrl: 'view/movie.html'
	})
	.when('/movies/details/:id',{
		controller:'MoviesController',
		templateUrl:'view/movie_details.html'
	})
	.when('/movies/add',{
		controller:'MoviesController',
		templateUrl:'view/add_movie.html'
	})
	.when('movies/edit/:id',{
		controller:'MoviesController',
		templateUrl:'view/edit_movie.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});