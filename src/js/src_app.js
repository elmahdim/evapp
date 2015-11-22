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
