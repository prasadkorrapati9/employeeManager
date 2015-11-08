employeeManager.controller('employeesController', ['$scope', '$log', '$location', 'employeeService',
    function($scope, $log, $location, employeeService) {
        $scope.employees = employeeService.getEmployeesList();

        $scope.redirectToAddPage = function() {
            $location.path('/add');
        };

        $scope.deleteEmployee = function(index) {
            employeeService.deleteEmployee(index);
        };
}]);