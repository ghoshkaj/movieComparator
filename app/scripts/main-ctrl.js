'use strict';

/**
 * @ngdoc function
 * @name movieComparatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieComparatorApp
 */
angular.module('movieComparatorApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=rx56tnnzu7bad72p2g2qgfms&callback=JSON_CALLBACK').success(function (response) {
    //  var data = [];
    //
    //  for(var i = 0; i < 10; i++) {
    //    data.push({title: response.movies[i].title, score: response.movies[i].ratings.critics_score});
    //  }
    //  console.log(data);
    //  $scope.data = data;
    //});

    $scope.loadJSON = function(){

      var getDataJason = $http.get('test/mock/data.json')
        .success(function(data, status, headers, config) {
        $scope.data = data;
      })
        .error(function(data, status, headers, config){
          throw new Error('Oh no! An Error!');
        })
    }
  });


