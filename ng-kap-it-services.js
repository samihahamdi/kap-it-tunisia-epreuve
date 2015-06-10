'use strict';

var kapItServicesModule= angular.module('kapItServicesModule', [ 'ngResource' ])
.factory('AuthenticationService',
    function ($resource) {
        return $resource('/rest/login/:id', {}, {});}).
        factory('homeService',
    function ($resource) {
        return $resource('/rest/home/:id', {}, {}); })
.factory('CompaniesService',
	    function ($resource) {
	        return $resource( '/rest/companie/:id', {}, {});})
.factory('DepartementService',
	    function ($resource) {
	        return $resource('/rest/departement/:id', {}, {});})
.factory('EmployeeService',
	    function ($resource) {
	        return $resource('/rest/employee/:id', {}, {});});