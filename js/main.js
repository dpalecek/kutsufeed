(function() {
	"use strict";

	var myApp = angular.module('myApp', [])

	.controller('appCtrl', function($scope, $http) {
		$http.get('twitter.php?q=adidasalerts')
			.then(function(dat) {
				console.log(dat);
		});
	})
})();