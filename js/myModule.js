var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider){
    $routeProvider
		.when('/',
			{
			    controller: '',
			    templateUrl: 'partials/home.html'
			})
		.when('/View1',
			{
			    controller: 'SimpleController',
			    templateUrl: 'partials/View1.html'
			})
		.when('/CharacterBuilder',
			{
			    controller: 'CharacterBuilderController',
			    templateUrl: 'partials/CharacterBuilder.html'
			})
		.when('/EotEStats',
			{
			    controller: 'EotEStatsController',
			    templateUrl: 'partials/EotEStats.html'
			})
		.otherwise({redirectTo:'/'});
})
    //simple example code
.factory('SimpleFactory', function () {
    var factory = {};
    var customers = [
		{ name: 'Maggie', city: 'Bismarck' },
		{ name: 'Jacob', city: 'Mandan' },
		{ name: 'Bo', city: 'Lincoln' }
    ];

    factory.getCustomers = function(){
        return customers;
    };

    return factory;
})
.controller('SimpleController', function ($scope, SimpleFactory) {
    $scope.customers = SimpleFactory.getCustomers();
	$scope.addCustomer = function() {
		$scope.customers.push(
			{name: $scope.newCustomer.name, city: $scope.newCustomer.city}
		);
	};
})
;