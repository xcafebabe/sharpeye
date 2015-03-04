define([
  'angular',
  'content/module'
],
function (angular, ContentModule) {
  'use strict';

  ContentModule.controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  return ContentModule;
});
