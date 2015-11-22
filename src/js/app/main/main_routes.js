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
