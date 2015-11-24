
angular.module('my-app', [])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('https://node-heroku-demo-1234.herokuapp.com/api/')
		.then(function(response) {
			console.log(response);
			$scope.server = response.data;
		})
}])