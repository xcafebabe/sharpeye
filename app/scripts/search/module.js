define([
  'angular',
  'jquery',
  'text!settings.json',
  'angular-ui-router',
  'angular-google-maps'
],
function (angular,$,Settings) {
  'use strict';

  /**
   * @ngdoc Module SharpEye Search
   * @name sharpeye
   * @description
   * # Features related to the Google Map Interacion
   *
   */

  if (!Settings){
    throw '**NOTE** - You must provide a settings.json file';
  }else {
    Settings = JSON.parse(Settings);
  }

  var module = angular.module('sharpeye.search', ['ui.router','uiGmapgoogle-maps']);

  //you can add config
  module.config([
    '$stateProvider',
    'uiGmapGoogleMapApiProvider',
    function ($stateProvider, $maps) {

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/search/main.html',
          controller: 'MainController'
      });

      $maps.configure({
        key: Settings.googleMapsKey,
        v: '3.18',
        libraries: 'places'
      });
   }]);

   module.run(['$templateCache', function ($templateCache) {

     $templateCache.put('searchbox.tpl.html', '<input type="text" class="form-control se-input-search" id="inputEmail" placeholder="Search">');
     $templateCache.put('window.tpl.html', '<div ng-controller="WindowCtrl" ng-init="showPlaceDetails(parameter)">{{place.name}}</div>');
   }]);

   return module;
});
