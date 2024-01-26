var app = angular.module('formApp', [])
app.controller('formControl', ['$scope', function($scope){
    $scope.reviews=[
        {
            comment: 'nice job',
            by: 'anik'
        },
        {
            comment: 'go ahead',
            by: 'imtiaz'
        },
        {
            comment: 'i love you',
            by: 'mou'
        }
    ]

    $scope.form={};
    $scope.adreview=function(){
        $scope.reviews.push($scope.form)
        $scope.form={};
    }
    
    // $scope.update = reviews
    // reviews.push()
}])