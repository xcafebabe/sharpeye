/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name sharpeyeApp
   * @description
   * # sharpeyeApp
   *
   * Main module of the application.
   */
  return angular
    .module('sharpeyeApp', ['sharpeyeApp.controllers.MainCtrl',
'sharpeyeApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
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
        .otherwise({
          redirectTo: '/'
        });
    });
});
