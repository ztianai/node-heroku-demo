
angular.module('my-app', [])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://heroku-node-demo-info343.herokuapp.com/api')
			.then(function(response) {
				console.log(response.data);
				$scope.server = response.data;
			}
	);
}])