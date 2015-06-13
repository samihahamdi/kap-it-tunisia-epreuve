'use strict';
//***************************** Controlleur CompaniesListCtrl : view :home/view.html
kapItApp.controller('DepartementListCtrl',
    function ($scope, $timeout,$routeParams,$http,$modal, $log,DepartementService ) {
	$scope.employee.companieId = $routeParams.companieId;
        $scope.rawDepartements = [];
        $http.get('/rest/departement/getCompanieDepartement/'+ $routeParams.companieId ).then(function(response) {
             $scope.rawDepartements = response.data;
        }, function (response) {
            console.log(response.status);
            if (response.status != 401 && response.status != 403) {
                $scope.addNotification("danger", "une erreur a été produite, veuillez reesayer s'il vous plait");

            }
            
            
            
            
            } );

       
 $scope.DeleteDepartementModal = function(departement) {
            var modalInstance = $modal.open({
                templateUrl: 'DeleteDepartementModal.html',
                controller: function ($scope,$http,$location, $modalInstance) {
                    $scope.departement=departement;
                    $scope.deleteDepartement = function (departement) {
                        $http.get('/rest/departement/remove/'+$routeParams.id+"/"+departement.id).success(function (response) {
                            
                           $scope.addNotification("success","suppresion avec succes");
                        }).error(function(response){
                                
                                $scope.addNotification("danger", "echec suppresion");
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