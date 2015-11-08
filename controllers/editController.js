employeeManager.controller('editController',['$scope', '$location', '$routeParams', 'employeeService',
    function($scope, $location, $routeParams, employeeService) {
        var employeeDetails = employeeService.getSelectedEmployee($routeParams.id);

        $scope.fullName = employeeDetails.name;
        $scope.email = employeeDetails.email;
        $scope.telephone = employeeDetails.tel;
        $scope.gender = employeeDetails.gender;

        $scope.updateEmployee = function () {
            employeeService.updateContact({
                id: $routeParams.id,
                name: $scope.fullName,
                tel: $scope.telephone,
                email: $scope.email,
                gender: $scope.gender
            });
            $location.path('/employees');
        };
}]);