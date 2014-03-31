'use strict';

controllers.controller('cartController', ['$scope', 'Cart',
  function($scope, Cart) {
      $scope.cart = Cart.get();
      
      $scope.delete = function (index) {
        $scope.cart.splice(index, 1);
      };
      
      $scope.decrease = function (index) {
        if($scope.cart[index].num > 1) {
            $scope.cart[index].num--;
        }
      };      
      
      $scope.increase = function (index) {
        $scope.cart[index].num++;
      };
      
      $scope.$watch('cart', function(){
          $scope.total = Cart.getTotal();
      }, true);
  }]);