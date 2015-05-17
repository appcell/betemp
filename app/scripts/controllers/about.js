'use strict';

/**
 * @ngdoc function
 * @name NewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the NewApp
 */
angular.module('NewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
