
var app = angular.module('myApps2', []);
app.controller('buttonController', ['$scope', function($scope) {
    
    $scope.count = 0;
    $scope.addNumberdisable = false;
    $scope.subNumberdisable = true;

    $scope.addNumber = function(){
        if($scope.count === 5){
            $scope.addNumberdisable = true;
            $scope.subNumberdisable = false;
        } else{
            $scope.count = $scope.count+1;
        }
        
    };
    $scope.subNumber = function(){
        if($scope.count === 0){
            $scope.subNumberdisable = true;
            $scope.addNumberdisable = false;

        } else{
            $scope.count = $scope.count-1;
        }
    };
    
    
}])

