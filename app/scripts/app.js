'use strict';

/**
 * @ngdoc overview
 * @name movieComparatorApp
 * @description
 * # movieComparatorApp
 *
 * Main module of the application.
 */
angular
  .module('movieComparatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'movieComparatorApp.d3',
    'movieComparatorApp.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });
