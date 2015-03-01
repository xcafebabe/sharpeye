define(['angular','jquery'], function (angular,$) {
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

      //Better to use angular-ui-bootstrap .
      //But lets wait to be fully compatible with angular 1.3
      //So hallo hallo $jquery, herzliche willkommen!
      $scope.$on('$viewContentLoaded', function(){
        $('#homeTab').tab('show');
      });    
    });
});
