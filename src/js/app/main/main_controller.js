(function () {
    'use strict';

    angular
        .module('evapp.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$http'];

    function MainController($scope, $http) {
        $scope.events = [];

        $scope.initialize = function () {
            $http.get('/event_list').then(function (response) {
                $scope.events = response.data;
            });
        }
        $scope.initialize();
    }
})();