
angular.module("app", [])
 		.controller('MyCtrl', function($scope) {
            initializeForm($scope);
            $scope.addmeal=function(){
            
           if (!$scope.myForm.$valid) {
                return;
            } 
             
            var meal = $scope.data;
            meal.tax = meal.taxRate * meal.price / 100;
            meal.subtotal = meal.price + meal.tax;
            meal.tip = meal.subtotal * meal.tipPercentage / 100;
            meal.totalPrice = meal.subtotal + meal.tip;
            
            $scope.data.subtotal = $scope.data.subtotal+ meal.totalPrice 
            $scope.data.tip = meal.tip
            $scope.data.totalPrice = meal.totalPrice 
            $scope.data.tipTotal =$scope.data.tipTotal+meal.tip
            $scope.data.mealCount = $scope.data.mealCount+1
            $scope.data.tax = meal.tax
            $scope.data.averageTip = $scope.data.tipTotal / $scope.data.mealCount

           
            };
              
             
            $scope.reset = function() {
            initializeForm($scope);
            };
            $scope.cancel = function() {
            $scope.data.price=0;
            $scope.data.taxRate=0;
            $scope.data.tipPercentage=0;
                    
                
            };
          
          $scope.get= function() {
                return earnings;
            };
         $scope.hasError = function (field, validation) {
            if (! $scope.submitted) {
                return false;
            }

            if (validation === undefined) {
                validation = "required";
            }

            return $scope.myForm[field].$error[validation];
        };
            

        });
        function initializeForm($scope) {
            $scope.submitted=false;
            $scope.data = {
                    price: 0,
                    taxRate: 0,
                    tipPercentage: 0,
                    tax: 0,
                    subtotal: 0,
                    tip: 0,
                    totalPrice: 0,
                    tipTotal: 0,
                    mealCount: 0,
                   averageTip: 0   
                };
             

        }
            

           
           

       
                
            
        


