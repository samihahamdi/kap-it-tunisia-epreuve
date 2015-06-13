
'use strict';

var KapItApp = angular.module('KapItApp', ['ngResource'])

.config(function ($routeProvider) {
	
$routeProvider.


   when('/', {
	      controller: 'LoginController',
           templateUrl: 'Views/login.view.html'
           
   	 }).

      when('/home', {
    	  controller: 'homeController' ,
            templateUrl: 'Views/home.view.html'
           
            	}).
       
       
      when('/peopleDirectory', {
    	  controller: 'EmployeeListCtrl',
            templateUrl: 'Views/peopleDirectory.view.html'
           
            	}).
      
      when('/peopleDirectory/new', {
              	  controller: 'EmployeeNewCtrl',
                      templateUrl: 'Views/newEmployee.view.html'
                     
                      	}).
      
      when('/statistics', {
    	  controller: 'statisticsController',
             templateUrl: 'Views/statistics.view.html'
             
            	  }).
       when('/JobManager', {
    	             controller: 'JobManagerComtoller',
                      templateUrl: 'Views/jobManager.view.html'
                       
                     	  }).
      when('/companie/list', {
    	     controller: 'CompaniesListCtrl',
            templateUrl: 'Views/listCompanie.view.html'
           
            	});
 });
