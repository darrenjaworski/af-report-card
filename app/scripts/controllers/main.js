'use strict';

/**
 * @ngdoc function
 * @name afReportCardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the afReportCardApp
 */
angular.module('afReportCardApp')
    .controller('MainCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('/data/schools.json').success( function(data){
                $scope.schools = data;
            })
            $scope.orderProp = 'siteCode';
            $scope.limit = 25;
            //$scope.groupToPages();
     }]);

angular.module('afReportCardApp')
    .controller('SchoolCtrl', ['$scope', '$routeParams',
      function($scope, $routeParams) {
        $scope.School = $routeParams.School;
      }]);
