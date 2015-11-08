var employeeManager = angular.module('employeeManager', ['ngRoute']);

employeeManager.config(function ($routeProvider) {
    $routeProvider

    .when('/employees', {
        templateUrl: 'pages/employees.html',
        controller: 'employeesController'
    })
    .when('/add', {
        templateUrl: 'pages/add.html',
        controller: 'addController'
    })
    .when('/edit/:id', {
        templateUrl: 'pages/edit.html',
        controller: 'editController'
    })
    .otherwise({
        redirectTo: '/employees'
    });
});