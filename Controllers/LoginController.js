
	  // angular module or controller definition goes here
	    'use strict';
	   KapItApp.controller('LoginController', function ($scope,  $location,$http ) {

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

	  
	
