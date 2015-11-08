employeeManager.controller('employeesController', ['$scope', '$log', '$location', 'employeeService', 'promiseService',
    function($scope, $log, $location, employeeService, promiseService) {
        $scope.employees = employeeService.getEmployeesList();

        $scope.redirectToAddPage = function() {
            $location.path('/add');
        };

        $scope.deleteEmployee = function(index) {
            employeeService.deleteEmployee(index);
        };

        promiseService.search().then(function(data){
            $scope.data = data;
        }).catch(function() {
            $scope.error = "There has been an error!";
        });
}]);