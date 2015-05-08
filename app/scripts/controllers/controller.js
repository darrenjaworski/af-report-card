'use strict';

/**
 * @ngdoc function
 * @name afReportCardApp.controller:MainCtrl
 * @description
 * # controller
 * Controller of the afReportCardApp
 */

 //main page section
angular.module('afReportCardApp')
    .controller('MainCtrl', ['$scope', '$http', 'Schools',
        function ($scope, $http, Schools) {
            console.log(Schools);
            $http.get('/data/2013.json').success( function(data){
                $scope.schools = data;
            });

            $scope.orderProp = 'School';
     }]);

angular.module('afReportCardApp')
    .factory('Schools', function() {

        return "blah";

    });

//individual school page
angular.module('afReportCardApp')
    .controller('SchoolCtrl', ['$scope', '$routeParams', '$http',
      function($scope, $routeParams, $http) {
        $scope.school = $routeParams.School;

        $http.get('/data/2013.json').success( function(data){
            data.forEach(function(el){
                if (el.School === $scope.school) {
                    $scope.school = el;
                } else {
                    return '';
                }
            });
        });

      }]);

//map page
angular.module('afReportCardApp')
    .controller('MapCtrl', function ($scope) {

    });

//equation page
angular.module('afReportCardApp')
    .controller('EqCtrl', function ($scope) {
        $scope.studentAchievement = [
          {
            'subject':'Reading/English II/English III',
            'numberStudents':20031,
            'pi':61,
            'grade':'D'
          },
          {
            'subject':'Math/Algebra I/Algebra II/Geometry',
            'numberStudents':22119,
            'pi':62,
            'grade':'D'
          },
          {
            'subject':'Science/Biology I',
            'numberStudents':7190,
            'pi':74,
            'grade':'C'
          },
          {
            'subject':'Social Studies/Geography/US History',
            'numberStudents':9175,
            'pi':64,
            'grade':'D'
          },
          {
            'subject':'Writing',
            'numberStudents':5308,
            'pi':80,
            'grade':'B'
          },
          {
            'subject':'Overall 2012 Student Performance Grade',
            'numberStudents':63823,
            'pi':65,
            'grade':'D'
          }
        ];
        $scope.studentGrowth = [
          {
            'subject':'Reading/English II',
            'numberStudents':13208,
            'pi':68,
            'grade':'D'
          },
          {
            'subject':'Math/Algebra I',
            'numberStudents':12882,
            'pi':66,
            'grade':'D'
          },
          {
            'subject':'Overall 2012 Student Growth Grade',
            'numberStudents':26090,
            'pi':67,
            'grade':'D'
          }
        ];
        $scope.bottomStudentGrowth = [
          {
            'subject':'Reading/English II',
            'numberStudents':3302,
            'pi':56,
            'grade':'F'
          },
          {
            'subject':'Math/Algebra I',
            'numberStudents':3220,
            'pi':54,
            'grade':'F'
          },
          {
            'subject':'Overall Bottom Quartile Growth Grade',
            'numberStudents':6522,
            'pi':55,
            'grade':'F'
          }
        ];
        $scope.wholeSchool = [
          {
            'subject':'Graduation Rate',
            'pi':'77.00%',
            'grade':'C'
          },
          {
            'subject':'Advanced Coursework Participation',
            'pi':'35.00%',
            'grade':'D'
          },
          {
            'subject':'Advanced Coursework Performance',
            'pi':'99.00%',
            'grade':'A'
          },
          {
            'subject':'AP/IB Exam Performance',
            'pi':'33.00%',
            'grade':'D'
          },
          {
            'subject':'College Entrance Exam Participation',
            'pi':'77.00%',
            'grade':'A'
          },
          {
            'subject':'College Entrance Exam Performance',
            'pi':'50.0%',
            'grade':'C'
          },
          {
            'subject':'Eighth Grade Graduation Rate',
            'pi':'',
            'grade':'N/A'
          },
          {
            'subject':'Five Year Graduation Rate',
            'pi':'84.200%',
            'grade':'B'
          }
        ];
    });
