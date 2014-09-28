'use strict';

/**
 * @ngdoc overview
 * @name afReportCardApp
 * @description
 * # afReportCardApp
 *
 * Main module of the application.
 */
angular
  .module('afReportCardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'schools'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        activetab: 'map'
      })
      .when('/school/:School', {
          templateUrl: 'views/school.html',
          controller: 'SchoolCtrl',
          activetab: 'schools'
      })
      .when('/equation', {
          templateUrl: 'views/equation.html',
          controller: 'EqCtrl',
          activetab: 'equation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
