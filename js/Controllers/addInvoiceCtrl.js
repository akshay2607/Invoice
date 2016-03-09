angular.module("invoiceApp").controller("addInvoiceCtrl", function($scope, $filter, $timeout){
    $scope.invalidProduct = false;
    $scope.saveSuccess = false;
    $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
    $scope.outputProducts = outputProducts;
    $scope.toggleProduct = function($index, data){
        if($scope.outputProducts[data.id]){
            delete $scope.outputProducts[data.id]; 
        }
        else{
            $scope.invalidProduct = false;
            $scope.outputProducts[data.id] = {
                name: data.name,
                quantity: 1,
                cost: 1, 
                id: data.id
            };
        }
    };
    
    $scope.delete = function(data){
        if($scope.outputProducts[data.id]){
            delete $scope.outputProducts[data.id];
        }
    };
    
    $scope.reset = function(){
        $scope.outputProducts = {};
        document.querySelector("#invoiceForm").reset();
        $scope.invNum = $scope.invoices.length+1;
        $scope.changeParam($scope.invNum);
        $scope.saveSuccess = false;      
    };
    
    $scope.saveInvoice = function(){
        if(Object.keys($scope.outputProducts).length == 0){
            $scope.invalidProduct = true;
        }
        else if(!$scope.customer){
            
        }
        else{
            var id = $scope.invoices.length;
            var totalSum = $filter('sum')($scope.outputProducts);
            var invDate = document.querySelector("#date").value
            $scope.invoices.push(new invoice(id, $scope.customer, invDate, $scope.invNum, totalSum));
            $scope.saveSuccess = true;   
            $timeout(function(){$scope.reset();}, 1000);
        }
    };
});