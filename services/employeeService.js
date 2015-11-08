employeeManager.service('employeeService', [ function() {
    this.employeeList = [
        {
            id: 1,
            name : 'Terrence S. Hatfield',
            tel: '651-603-1723',
            email: 'TerrenceSHatfield@rhyta.com',
            gender: 'male',
            preferredLocations: {
                Bangalore: true,
                Mumbai: true,
                Delhi: false
            }
        },
        {
            id: 2,
            name : 'Chris M. Manning',
            tel: '513-307-5859',
            email: 'ChrisMManning@dayrep.com',
            gender: 'female',
            preferredLocations: {
                Bangalore: true,
                Mumbai: true,
                Delhi: false
            }
        },
        {
            id: 3,
            name : 'Ricky M. Digiacomo',
            tel: '918-774-0199',
            email: 'RickyMDigiacomo@teleworm.us',
            gender: 'male',
            preferredLocations: {
                Bangalore: true,
                Mumbai: true,
                Delhi: false
            }
        },
        {
            id: 4,
            name : 'Michael K. Bayne',
            tel: '702-989-5145',
            email: 'MichaelKBayne@rhyta.com',
            gender: 'male',
            preferredLocations: {
                Bangalore: true,
                Mumbai: true,
                Delhi: true
            }
        },
        {
            id: 5,
            name : 'John I. Wilson',
            tel: '318-292-6700',
            email: 'JohnIWilson@dayrep.com',
            gender: 'male',
            preferredLocations: {
                Bangalore: true,
                Mumbai: false,
                Delhi: false
            }
        },
        {
            id: 6,
            name : 'Rodolfo P. Robinett',
            tel: '803-557-9815',
            email: 'RodolfoPRobinett@jourrapide.com',
            gender: 'male',
            preferredLocations: {
                Bangalore: false,
                Mumbai: true,
                Delhi: false
            }
        }
    ];

    this.getEmployeesList = function() {
        return this.employeeList;
    };

    this.addEmployee = function(employee) {
        employee.id = this.employeeList[this.employeeList.length - 1].id + 1;
        this.employeeList.push(employee);
    };

    this.deleteEmployee = function(index) {
        this.employeeList.splice(index, 1);
    };

    this.getSelectedEmployee = function(id) {
        for(var i = 0; i < this.employeeList.length; i++) {
            if(this.employeeList[i].id === parseInt(id)) {
                return this.employeeList[i];
            }
        }
    };

    this.updateContact = function(employee) {
        for(var i = 0; i < this.employeeList.length; i++) {
            if(this.employeeList[i].id === parseInt(employee.id)){
                this.employeeList[i] = employee;
            }
        }
    };

}]);