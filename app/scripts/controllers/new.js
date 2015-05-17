'use strict';

/* Controllers */

var phonecatApp = angular.module('newApp', []);

phonecatApp.controller('ItemListCtrl', function($scope) {
  $scope.items = [
    {'data-id': '3',
    'data-ordinal': '5',
    'cover-img-link': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
    'cover-img-src': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
    'cover-name-link': '#',
    'cover-name': 'Market - Highly Selective Marketplace for Creatives',
    'author': 'Temp',
    'appreciation': '100',
    'views': '1885',
    'tag': [{
      'name': 'tempTagA',
      'link': '#'
    },{
      'name': 'tempTagB',
      'link': '#'
    }]
    }];
});