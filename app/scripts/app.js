'use strict';

/**
 * @ngdoc overview
 * @name localAngularDocsApp
 * @description
 * # localAngularDocsApp
 *
 * Main module of the application.
 */
angular
  .module('localAngularDocsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/schemas', {
        templateUrl: 'views/schemas.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
