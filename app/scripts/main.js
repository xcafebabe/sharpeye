/*jshint unused: vars */
require.config({
  paths: {
    'angular' : '../../bower_components/angular/angular',
    'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
    'angular-route' : '../../bower_components/angular-route/angular-route',
    'angular-sanitize' : '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-resource' : '../../bower_components/angular-resource/angular-resource',
    'angular-animate' : '../../bower_components/angular-animate/angular-animate',
    'angular-touch' : '../../bower_components/angular-touch/angular-touch',
    'angular-mock' : '../../bower_components/angular-mocks/angular-mocks',
    'angular-messages' : '../../bower_components/angular-messages/angular-messages',
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route' : ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate': ['angular'],
    'angular-touch': ['angular'],
    'angular-messages' : ['angular'],
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    }
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'angular-messages'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, ngMessages) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
