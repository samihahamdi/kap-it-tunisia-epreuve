
var kapItServicesModule = angular.module('kapItServicesModule', []);
var kapItCtrlsModule= angular.module('kapItCtrlsModule', ['kapItServicesModule','ngTable']);


var kapItApp = angular.module('kapItApp', ['ngRoute', 'kapItServicesModule', 'kapItCtrlsModule', 'ui.bootstrap',
                                           'ngAnimate']);

kapItApp.config(function ($routeProvider, $animateProvider, $httpProvider, $locationProvider) {
    
    $routeProvider.
   when('/home', {
            templateUrl: 'home/home.view.html',
            controller: 'homeController' }).
   when('/login', {
    templateUrl: 'login/login.view.html',
    controller: 'loginController'}).
   when('/employee/new', {
        templateUrl: 'peopleDirectory/employee/newEmployee.view.html',
        controller: 'EmployeeNewCtrl'}).
   when('/employee/getDepartementEmployee', {
            templateUrl: 'peopleDirectory/employee/listEmployee.view.html',
            controller: 'EmployeeListCtrl'}).
   when('/departement/getCompanieDepartement', {
                templateUrl: 'peopleDirectory/departement/listDepartement.view.html',
                controller: 'DepartementListCtrl'}).
    when('/companie/list', {
        templateUrl: 'peopleDirectory/companie/listCompanie.view.html',
        controller: 'CompaniesListCtrl'}). otherwise({
            redirectTo: '/'
        });
 });
