'use strict';

controllers.controller('progressController', ['$scope', 'Cart', 'Customer',
  function($scope, Cart, Customer) {
      $scope.cart = Cart.get();
      $scope.customer = Customer.get();
      
      $scope.$watch('cart', function(){
          $scope.cartValid = Cart.isValid();
      }, true);
      
      $scope.$watch('customer', function(){
          $scope.customerValid = Customer.isValid();
      }, true);      
   }]);