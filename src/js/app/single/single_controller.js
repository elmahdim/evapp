(function () {
    'use strict';

    angular
        .module('evapp.controllers')
        .controller('SingleController', SingleController);

    SingleController.$inject = ['$scope', '$http'];

    function SingleController($scope, $http) {
        $scope.single = null;
        $http.get('/single/:_id').then(function (response) {
            $scope.single = response.data;
        });
    }
})();