/*jshint unused: vars */
define(['angular',
'text!settings.json',
'controllers/main',
'controllers/about'],
 function (angular, Settings, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name sharpeyeApp
   * @description
   * # sharpeyeApp
   *
   * Main module of the application.
   */

  if (!Settings){
   throw '**NOTE** - You must provide a settings.json file';
  }else {
   Settings = JSON.parse(Settings);
  }

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
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      'uiGmapGoogleMapApiProvider',
      function ($stateProvider, $urlRouterProvider, $maps) {

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

      $maps.configure({
        key: Settings.googleMapsKey,
        v: '3.18',
        libraries: 'places'
      });
    }])

    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('searchbox.tpl.html', '<input id="pac-input" class="pac-controls" type="text" placeholder="Search">');
      $templateCache.put('window.tpl.html', '<div ng-controller="WindowCtrl" ng-init="showPlaceDetails(parameter)">{{place.name}}</div>');
    }]);
});
