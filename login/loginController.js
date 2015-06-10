
kapItCtrlsModule.controller('loginController', function ($scope, $routeParams, $location,$http,AuthenticationService ) {

    $scope.login = function () {
        $scope.username = this.username;
        $scope.password = this.password;
        var data = "username=" + this.username + "&password=" + this.password ;
        $http.post('/rest/login', data).success(function (response) {
        	          callback(response);
        	   
        	      });
       
    };
}
);

