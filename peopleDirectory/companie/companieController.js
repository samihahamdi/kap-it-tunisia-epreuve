
//***************************** Controlleur CompaniesListCtrl : view :home/view.html
kapItCtrlsModule.controller('CompaniesListCtrl',
    function ($scope, $timeout,$routeParams, $resource,$http,$modal,$log,CompaniesService ) {
        $scope.rawCompanies = [];

        $http.get( '/rest/companie/list/'+$routeParams.id).then(function(response) {
             $scope.rawCompanies = response.data;
        }, function (response) {
            console.log(response.status);
            if (response.status != 401 && response.status != 403) {
                $scope.addNotification("danger", "une erreur a été produite, veuillez reesayer s'il vous plait");

            }
        } );

       
 $scope.DeleteCompaniesModal = function(companie) {
            var modalInstance = $modal.open({
                templateUrl: 'DeleteCompanieModal.html',
                controller: function ($scope,$http,$location, $modalInstance) {
                    $scope.companie=companie;
                    $scope.deleteCompanie = function (contact) {
                        $http.get('/rest/companie/remove/'+$routeParams.id+"/"+companie.id).success(function (response) {
                            
                            $scope.addNotification("success", "");
                        }).error(function(response){
                                
                                $scope.addNotification("danger", "");
                            }
                        );
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                
                
            });

            modalInstance.result.then( function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    });