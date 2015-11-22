(function () {
    'use strict';

    angular
        .module('evapp.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$http'];

    function MainController($scope, $http) {
      $scope.intro = 'Zdrasty';
    }
})();
