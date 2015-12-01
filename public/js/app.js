(function() {
    'use strict';

    angular.module('evapp.controllers', []);
    angular.module('evapp.routes', []);

    var dependencies = [
        'ngRoute',
        'ngResource',
        'evapp.controllers',
        'evapp.routes'
    ];

    angular.module('evapp', dependencies);
})();
 
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
(function() {
    'use strict';

    angular
        .module('evapp.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : "partials/main",
                controller  : 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
              redirectTo: '/'
            });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix = '!';
    }
})();
