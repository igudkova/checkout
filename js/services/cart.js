'use strict';

services.factory('Cart', ['$resource',
  function($resource) {
    var resource = $resource('data/data.json', {}, {
            query: {method:'GET', isArray:true}
        });
    var items = resource.query();
      
    function get() {
        return items;
    }
      
    function getTotal() {
        var total = 0;
        for(var i=0; i<items.length; i++) {
            total += items[i].num * items[i].price;
        }
        
        return total;
    }
      
    function isValid() {
        return items.length > 0;
    }
        
    function cleanup() {
        items = [];
    }
      
    return {
        get: get,
        getTotal: getTotal,
        isValid: isValid,
        cleanup: cleanup
    };
  }
]);