employeeManager.service('promiseService', ['$q', '$http', function($q, $http) {

    var service = {};

    service.search = function() {
        // We make use of Angular's $q library to create the deferred instance
        var deferred = $q.defer();

        $http.get('employees_list.json')
            .success(function(data){
                console.log(data);
                deferred.resolve(data);
            })
            .error(function(){
                deferred.reject();
            });
        // This promise is returned to the Caller.
        return deferred.promise;
    }

    return service;
}]);