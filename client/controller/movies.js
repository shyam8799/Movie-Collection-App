var movieStore=angular.module('movieStore');

movieStore.controller('MoviesController', ['$scope', '$http', '$location','$routeParams',function($scope, $http, $location,$routeParams){
      $scope.getMovies = function(){
      	$http.get('/api/movies').then(function(response){
      		$scope.movies=response;
      		console.log($scope.movies);
      	});
      }
}]);

