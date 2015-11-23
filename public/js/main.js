
angular.module('my-app', [])

.controller('MainCtrl', ['$scope', '$https', function($scope, $https) {
	$https.get('http://heroku-node-demo-info343.herokuapp.com/api')
			.then(function(response) {
				console.log(response.data);
				$scope.server = response.data;
			}
	);
}])