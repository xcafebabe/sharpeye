define([
  'angular',
],
function (angular) {
  'use strict';

  var module = angular.module('sharpeye.content', ['ui.router']);

  module.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
      //Default Path
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'views/content/about.html',
          controller: 'AboutController'
        });
    }]);

  return module;
});
