(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.items = ShoppingListCheckOffService.getToBuyList();   
        toBuyList.buyItem = function (itemIndex) {
            return ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtList();
    }
    
    function ShoppingListCheckOffService() {
        var service = this;
    
        // List of shopping items
        var toBuyList = [
            {name : "Hello", quantity : 10},
            {name : "Thanks", quantity : 1},
            {name : "For", quantity : 4},
            {name : "Your", quantity : 3},    
            {name : "Review!", quantity : 2},
        ];

        var boughtList = [];

        service.getToBuyList = function (){
            return toBuyList;
        };

        service.buyItem = function(index) {
            boughtList.push(toBuyList[index]);
            toBuyList.splice(index, 1);
        }

        service.getBoughtList = function() {
            return boughtList;
        };
    }
})();
    