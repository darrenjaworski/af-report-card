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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/school/:SiteCode', {
          templateUrl: 'views/school.html',
          controller: 'SchoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
