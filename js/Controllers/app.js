/*
Author: Akshay Krishna Radhakrishna
email: akshay.radhakrishna@gmail.com
*/
var app = angular.module("invoiceApp",['ngAnimate']);

app.controller("invoiceCtrl", function($scope, $timeout){
    $scope.showContainer = "show-invoice";
    $scope.head = "All Invoices";
    $scope.invoices = [];
    $scope.products = products;
    $scope.invNum = $scope.invoices.length + 1;
    
    $scope.makeActive = function($event, data){
        var navEl = angular.element(document.querySelectorAll(".nav li a"));
        navEl.removeClass("active");
        var el = angular.element($event.target);
        el.addClass("active");
        $scope.showContainer = data;
        if(data == 'add-invoice'){
            $scope.head = "Add new invoice";
        }
        else if(data == 'show-invoice'){
            $scope.head = "All Invoices";
        }
        else{
            $scope.head = "Trash";
        }
    };
    
    $scope.changeParam = function(newVal){
        $scope.invNum = newVal;
    };
    
    $scope.toggleInvoice = function(data){
        if(data.status){
            data.status = false;
            $scope.invNum -= 1;
        }
        else{
            data.status = true;
            $scope.invNum += 1;
        }
    };
});





