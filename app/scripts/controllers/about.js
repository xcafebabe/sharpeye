define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sharpeyeApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the sharpeyeApp
   */
  angular.module('sharpeyeApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
