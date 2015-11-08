employeeManager.controller('addController',['$scope', '$location', 'employeeService',
    function($scope, $location, employeeService) {
        $scope.preferredLocations = [
            {city: 'Bangalore', selected: false},
            {city: 'Mumbai', selected: false},
            {city: 'Delhi', selected: false}
        ];

        $scope.locationCount = 0;
        $scope.locationCheck = function(location){
            if(location.checked){
                $scope.locationCount--;
            }else{
                $scope.colorCount++;
            }
        };

        $scope.addContact = function () {
            employeeService.addEmployee({
                name: $scope.fullName,
                tel: $scope.telephone,
                email: $scope.email,
                gender: $scope.gender,
                preferredLocations: $scope.preferredLocations
            });
            $location.path('/employees');
        };
}]);