(function () {
    'use strict';

    angular
        .module('evapp.controllers')
        .controller('SingleController', SingleController);

    SingleController.$inject = ['$scope', '$http', '$routeParams'];

    function SingleController($scope, $http, $routeParams) {
        $scope.single = null;
        $http.get('/single/'+$routeParams.id).then(function (response) {
            $scope.single = response.data;
        });
    }
})();