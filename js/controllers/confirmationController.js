'use strict';

controllers.controller('confirmationController', ['$scope', '$location', 'Cart', 'Customer',
  function($scope, $location, Cart, Customer) {
    $scope.cart = Cart.get();
    $scope.total = Cart.getTotal();
    $scope.customer = Customer.get();
      
    $scope.order = function () {
        Cart.cleanup();
        Customer.cleanup();alert(Customer.get());
        $location.path("#/cart");
    };
  }]);