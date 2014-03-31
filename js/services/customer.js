'use strict';

services.factory('Customer', function() {
    var customer = {
      name: "",
      email: "",
      isValid: false
    };
    
    function get() {
        return customer;
    }
    
    function isValid() {
        return customer.isValid;
    }
    
    function cleanup() {
        customer = {
            name: "",
            email: "",
            isValid: false
        };
    }    
    
    return {
        get: get,
        isValid: isValid,
        cleanup: cleanup
    };
});