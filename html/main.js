
angular.module('my-app', [])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://heroku-node-demo-info343.herokuapp.com/')
			.then(function(response) {
				console.log("Response: " + repsonse);
				$scope.message(response);
			}
	);
}])