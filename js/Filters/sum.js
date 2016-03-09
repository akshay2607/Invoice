angular.module("invoiceApp").filter("sum", function(){
    return function(prods){
        var total = 0;
        var len = Object.keys(prods).length;
        for(var key in prods) {
            total = total + (prods[key].quantity*prods[key].cost);    
        };
        return total;
    };
});