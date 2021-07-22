var app = angular.module('myApp');

app.controller('HomeController',
	function ($scope, $rootScope, $stateParams, $state, LoginService, $location, $http) {
		$scope.user = $rootScope.userName;

		$http.get('employee.json').success(function (data) {
			$scope.employees = data;
		});
		$scope.tab = 2;
		$scope.myVar = false;
		$scope.openTab = function (event) {
			$scope.tab = $scope.tab ? 2 : 1;

			var elements = angular.element(document.querySelectorAll('.editAdmin'));
			elements.attr('ng-show', "myVar");
			$scope.myVar = !$scope.myVar;
		}


	});


