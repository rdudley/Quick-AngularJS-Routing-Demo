// Create application module
var myApp = angular.module('myApp', ['ngRoute']);
 
// Routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller  : 'homeController'
	})
	.when('/section1', {
		templateUrl: 'partials/section1.html',
		controller  : 'section1Controller'
	})
	.when('/section2', {
		templateUrl: 'partials/section2.html',
		controller  : 'section2Controller'
	})
	.when('/section3', {
		templateUrl: 'partials/section3.html',
		controller  : 'section3Controller'
	})
	.when('/section4', {
		templateUrl: 'partials/section4.html',
		controller  : 'section4Controller'			
	});
});

// Sample controllers for each section
myApp.controller("homeController", function($scope) {
	$scope.message = "This is the default home page, and this message is loaded in from the default controller.";
});

myApp.controller("section1Controller", function($scope) {
	$scope.message = "Welcome to Section 1, and this message is loaded from section1Controller.";
});

myApp.controller("section2Controller", function($scope) {
	$scope.message = "Greetings and welcome to Section 2. This message brought to you by section2Controller.";
});

myApp.controller("section3Controller", function($scope) {
	$scope.message = "Section 3 is the best, forget the rest! This message courtesy of section3Controller.";
});

myApp.controller("section4Controller", function($scope) {
	$scope.message = "There is always more in Section 4, and this message is from the controller of section 4.";
});