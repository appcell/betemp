'use strict';

/**
 * @ngdoc function
 * @name NewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the NewApp
 */

var newApp = angular.module('NewApp', ['infinite-scroll']);

newApp.controller('MainCtrl', function($scope, ItemLoad) {
  $scope.itemLoad = new ItemLoad();
    $scope.FieldItems = [
      {
        'dataKey': '5',
        'name': 'Architecture'
      },
            {
        'dataKey': '5',
        'name': 'Architecture'
      },
            {
        'dataKey': '5',
        'name': 'Architecture'
      },
            {
        'dataKey': '5',
        'name': 'Architecture'
      },
            {
        'dataKey': '5',
        'name': 'Architecture'
      },
            {
        'dataKey': '5',
        'name': 'Architecture'
      }
    ];
});

// Reddit constructor function to encapsulate HTTP and pagination logic
newApp.factory('ItemLoad', function($http) {
  var ItemLoad = function() {
    this.items = [
      {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
      {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      },
            {'dataId': '3',
      'dataOrdinal': '5',
      'coverImgLink': 'hahaah',
      'coverImgSrc': 'https://mir-s3-cdn-cf.behance.net/projects/202/a9de1026124597.5551063d2c9ba.jpg',
      'coverNameLink': '#',
      'coverName': 'Market - Highly Selective Marketplace for Creatives',
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
      }
      ];
    this.busy = false;
    this.after = '';
  };

  ItemLoad.prototype.nextPage = function() {
    if (this.busy) return;
    alert(1);
    this.busy = true;

    var url = "#";
    $http.jsonp(url).success(function(data) {
      var items = data.data.children;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }
      this.after = "t3_" + this.items[this.items.length - 1].id;
      this.busy = false;
    }.bind(this));
  };

  return ItemLoad;
});