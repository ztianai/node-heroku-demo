
angular.module('my-app', [])

.controller('MainCtrl', ['$scope', '$https', function($scope, $http) {
	$http.get('https://heroku-node-demo-info343.herokuapp.com/api')
			.then(function(response) {
				console.log(response.data);
				$scope.server = response.data;
			}
	);
}])