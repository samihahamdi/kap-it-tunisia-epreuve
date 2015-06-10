
//***************************** Controlleur EmployeeListCtrl 
kapItCtrlsModule.controller('EmployeeListCtrl',
    function ($scope, $timeout,$routeParams, $resource,$http,$modal,$log, EmployeeService ) {
        $scope.rawEmployees = [];
        $scope.employee.departmentId = $routeParams.departmentId;
        $http.get('/rest/employee/getDepartementEmployee/' + $routeParams.departmentId ).then(function(response) {
            $scope.rawEmployees = response.data;
        }, function (response) {
            console.log(response.status);
            if (response.status != 401 && response.status != 403) {
                $scope.addNotification("danger", "une erreur a ete produite, veuillez reesayer s'il vous plait");

            }
        } );

$scope.DeleteEmployeeModal = function(employee) {
            var modalInstance = $modal.open({
                templateUrl: 'DeleteEmployeeModal.html',
                controller: function ($scope,$http,$location, $modalInstance) {
                    $scope.Employee=Employee;
                    $scope.deleteDepartement = function (departement) {
                        $http.get('/rest/Employee/remove/'+$routeParams.id+"/"+Employee.id).success(function (response) {
                            
                            $scope.addNotification("success", "suppresion avec succes");
                        }).error(function(response){
                                
                                $scope.addNotification("danger","echec suppresion");
                            }
                        );
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
               });

          
        };

    });


//*****************************é Controlleur EmployeeNewCtrl : 

kapItCtrlsModule.controller('EmployeeNewCtrl', function ($scope, $routeParams,$upload,$http,$filter, $location,EmployeeService) {
	//recupérer le companie par son id afin de récupérer ses departements
	$scope.employee = {};
	 $scope.Departements= {};
	 $scope.companies= {};
	$scope.employee.companieId = $routeParams.companieId;
	$scope.selectedDepartements = [];
	$scope.selectedCompanies= [];
	$http.get('rest/companie/list').success(function(result) {
        $scope.companies = response.data;
    });
	
	$http.get('rest/companie/getCompanieDepartements').success(function(result){
	        $scope.Departements = response.data;
	        });
$scope.saveEmployee = function () {
	            $http.post('rest/employee/new/'+$scope.employee).success(function () {
	             $scope.addNotification("success", "creation de departement avec succes!!");
	            }).error(function(){
	                   $scope.addNotification("danger", "Echec de sauvegarde ");
	                }
	            );
	        };

});



