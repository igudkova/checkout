'use strict';

controllers.controller('customerController', ['$scope', 'Customer',
  function($scope, Customer) {
    $scope.customer = Customer.get();
      
    $scope.$watch('customer', function(){
      $scope.customer.isValid = !$scope.customerForm.$invalid;
    }, true);
  }]);