define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sharpeyeApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the sharpeyeApp
   */
  angular.module('sharpeyeApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
});
