var app = angular.module('myApp');

app.controller('AppController', ['$scope', '$location', '_shoppingCart', function($scope, $location, _shoppingCart) {
    $scope.view = {};
    $scope.view.quantity = 1;
    $scope.view.priceSort = '+';
    $scope.view.defaultData = _shoppingCart.getDefaultData().then(function(res) {
        $scope.view.defaultData = res.data;
    });
}]);

app.filter('money', function() {
    return function(input) {
        return (input / 100).toFixed(2);
    };
});
