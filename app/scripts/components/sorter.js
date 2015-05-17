(function() {
  'use strict';

  angular.module('NewApp')
    .directive('sorter', sorter);

  function sorter() { 
    return {
      restrict: 'A',
      scope: {
        sorttype: '@'
      },
      link: function(scope, element) {
        element.on('click', function() {
          scope.$parent.showSorter(scope.sorttype);
        })
      }
    }
  }
}());