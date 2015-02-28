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
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        });
    });
});
