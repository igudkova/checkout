'use strict';

var controllers = angular.module('checkout.controllers', []);
var services = angular.module('checkout.services', ['ngResource']);
var directives = angular.module('checkout.directives', []);

var app = angular.module('checkout', [
  'ngRoute',
  controllers.name,
  services.name,
  directives.name  
]);

// TODO redirect to /cart, if URLs are changed directly 
// in the browser address but data is invalid
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cart', {
        templateUrl: 'templates/cart.html',
        controller: 'cartController'
      }).
      when('/customer', {
        templateUrl: 'templates/customer.html',
        controller: 'customerController'
      }).
      when('/confirmation', {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationController'
      }).    
      otherwise({
        redirectTo: '/cart'
      });
  }]);

