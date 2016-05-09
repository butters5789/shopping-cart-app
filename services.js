var app = angular.module('myApp');

app.service('_shoppingCart', ['$http', function($http) {
    return {
        getDefaultData: function() {
            return $http.get('data.json');
        }
    }
}]);
